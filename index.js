const express = require("express");
const app = express();
const port = 3000;

const db = require("./src/lib/db");
const { QueryTypes } = require("sequelize");

app.set("view engine", "hbs");
app.set("views", "views");

// setup untuk bisa mengakses static file
app.use("/assets", express.static("assets"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const blogs = [{}];

// routing
app.get("/", (req, res) => {
   res.render("index", {
      data: "ini data dari backend/server",
   });
});
app.get("/blog", renderBlog);
app.post("/blog", addBlog);
app.get("/contact", renderContact);
app.get("/testimonial", renderTestimonial);
app.get("/blog-detail/:blog_id", renderBlogDetail);
app.get("/edit-blog/:blog_id", renderEditBlog);
app.post("/edit-blog/:blog_id", editBlog);
app.get("/delete-blog/:blog_id", deleteBlog);

function renderContact(req, res) {
   res.render("contact");
}

function renderTestimonial(req, res) {
   res.render("testimonial");
}

async function renderBlog(req, res) {
   const query = `SELECT * FROM blog;`;
   const result = await db.query(query, { type: QueryTypes.SELECT });

   res.render("blog", {
      data: result,
   });
}

async function addBlog(req, res) {
   try {
      console.log(req.body);

      // const newBlog = {
      //    id: blogs.length + 1,
      //    title: req.body.title,
      //    content: req.body.content,
      //    createdAt: new Date(),
      //    author: "Cundus",
      // };

      // blogs.push(newBlog);

      const query = `
      INSERT INTO blog
      (title, content, created_at, author)
      VALUES
      ('${req.body.title}', '${req.body.content}', NOW(), 'Cundus')
      `;

      await db.query(query);

      res.redirect("/blog");
   } catch (error) {
      console.log(error);
   }
}

async function renderBlogDetail(req, res) {
   const id = req.params.blog_id;

   const blog = await db.query(`SELECT * FROM blog WHERE id = ${id}`, {
      type: QueryTypes.SELECT,
   });

   res.render("blog-detail", {
      data: blog[0],
   });
}

async function renderEditBlog(req, res) {
   const id = req.params.blog_id;

   const blog = await db.query(`SELECT * FROM blog WHERE id = ${id}`, {
      type: QueryTypes.SELECT,
   });

   res.render("edit-blog", {
      data: blog[0],
   });
}

async function editBlog(req, res) {
   try {
      const id = req.params.blog_id;
      const newBlog = {
         title: req.body.title,
         content: req.body.content,
         createdAt: new Date(),
         author: "Cundus",
      };

      // const index = blogs.findIndex((blog) => blog.id == id);

      // blogs[index] = newBlog;

      const query = `
   UPDATE blog
   SET 
   title = '${newBlog.title}',
   content = '${newBlog.content}' 
   WHERE id = ${id}`;

      await db.query(query);

      res.redirect("/blog");
   } catch (error) {
      console.log(error);
   }
}

async function deleteBlog(req, res) {
   const id = req.params.blog_id;

   // const index = blogs.findIndex((blog) => blog.id == id);

   // blogs.splice(index, 1);

   const query = `DELETE FROM blog WHERE id = ${id}`;
   await db.query(query);

   res.redirect("/blog");
}

// akhir routes

app.listen(port, async () => {
   try {
      await db.authenticate();

      console.log(`Server berjalan di port ${port}`);
   } catch (error) {
      console.log(error);
   }
});
