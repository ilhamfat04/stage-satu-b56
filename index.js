const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", "views");

// setup untuk bisa mengakses static file
app.use("/assets", express.static("assets"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const blogs = [];

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

function renderBlog(req, res) {
   res.render("blog", {
      data: [...blogs],
   });
}

function addBlog(req, res) {
   console.log(req.body);

   const newBlog = {
      id: blogs.length + 1,
      title: req.body.title,
      content: req.body.content,
      createdAt: new Date(),
      author: "Cundus",
   };

   blogs.push(newBlog);

   res.redirect("/blog");
}

function renderBlogDetail(req, res) {
   const id = req.params.blog_id;

   const blog = blogs.find((blog) => blog.id == id);

   res.render("blog-detail", {
      data: blog,
   });
}

function renderEditBlog(req, res) {
   const id = req.params.blog_id;

   const blog = blogs.find((blog) => blog.id == id);
   console.log(blog);
   res.render("edit-blog", {
      data: blog,
   });
}

function editBlog(req, res) {
   const id = req.params.blog_id;
   const newBlog = {
      id: id,
      title: req.body.title,
      content: req.body.content,
      createdAt: new Date(),
      author: "Cundus",
   };

   const index = blogs.findIndex((blog) => blog.id == id);

   blogs[index] = newBlog;

   res.redirect("/blog");
}

function deleteBlog(req, res) {
   const id = req.params.blog_id;

   const index = blogs.findIndex((blog) => blog.id == id);

   blogs.splice(index, 1);

   res.redirect("/blog");
}

// akhir routes

app.listen(port, () => {
   console.log(`Server berjalan di port ${port}`);
});
