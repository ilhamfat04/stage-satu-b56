const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Mantap bang!",
    author: "Surya",
    rating: 1,
  },
  {
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Mantap keren sekali!",
    author: "Alfi Dharmawan",
    rating: 2,
  },
  {
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "Mantap keren sekali!",
    author: "Alfi Dharmawan",
    rating: 2,
  },
];

function allTestimonial() {
  const testimonialHTML = testimonials.map((testimonial) => {
    return `<div class="testimonial">
                <img
                  src="${testimonial.image}"
                  class="profile-testimonial"
                />
                <p class="quote">${testimonial.content}</p>
                <p class="author">- ${testimonial.author}</p>
              </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ");
}

function filterTestimonial(rating) {
  const filteredTestimonialByRating = testimonials.filter((testimonial) => {
    return testimonial.rating == rating;
  });

  const testimonialHTML = filteredTestimonialByRating.map((testimonial) => {
    return `<div class="testimonial">
                    <img
                      src="${testimonial.image}"
                      class="profile-testimonial"
                    />
                    <p class="quote">${testimonial.content}</p>
                    <p class="author">- ${testimonial.author}</p>
                  </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ");
}

allTestimonial();
