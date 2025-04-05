const testimonial = [
  {
    "id": 1,
    "name": 'vivekananthar',
    "testimonial": 'all knowledge that the world has ever received comes from the mind',
    "image": "vivek.jpg"
  },
  {
    "id": 2,
    "name": 'OSHO',
    "testimonial": 'Don’t seek, don’t search, don’t ask, don’t knock, don’t demand – relax',
    "image": "osho.jpg"
  },
  {
    "id": 3,
    "name": 'STANLEY KUBRICK',
    "testimonial": 'Observation is a dying art',
    "image": "kubrick.jpg"
  },
  {
    "id": 4,
    "name": 'FIGHT CLUB',
    "testimonial": 'Maybe self-improvement isnt the answer, maybe self-destruction is the answer',
    "image": "fight.jpg"  
  },
  {
    "id": 5,
    "name": 'NAKULAN',
    "testimonial": 'there is no something new',
    "image": "nakulan.jpg"   
  },
  {
    "id": 6,
    "name": 'FRANZ KAFKA',
    "testimonial": 'I am a cage, in search of a bird',
    "image": "kafka.jpg"  
  }
]

const image = document.querySelector("img");
const text = document.getElementById("text");
const username = document.getElementById("username");

let indexval = 0;

function updatetestimonial()
{
  const testimonialz= testimonial[indexval];
  image.src =testimonialz.image;
  text.textContent = testimonialz.testimonial;
  username.textContent = testimonialz.name;
  indexval++;
  if (indexval === testimonial.length) {
    indexval = 0;
  }
  setTimeout(updatetestimonial , 2000)
  }
  updatetestimonial();


  