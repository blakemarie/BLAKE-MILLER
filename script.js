document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is loaded!");
  });
  const testimonials = document.querySelectorAll('.testimonial');
  let current = 0;
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
  }
  
  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }
  
  setInterval(nextTestimonial, 5000); // Change every 5 seconds
  
  showTestimonial(current); // Show the first on load
  