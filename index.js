const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", "views");

// setup untuk bisa mengakses static file
app.use("/assets", express.static("assets"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const blogs = [
   {
      title: "blog 1",
      content: "ini content blog 1",
   },
];

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
app.get("/blog-detail", renderBlogDetail);

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

   // blogs.push(req.body);

   res.redirect("/blog");
}

function renderBlogDetail(req, res) {
   res.render("blog-detail");
}

// akhir routes

app.listen(port, () => {
   console.log(`Server berjalan di port ${port}`);
});
