import courses from "../array-of-course.js";

// import mensaje, { hola } from "../array-of-course.js";

// console.log(mensaje, { hola });

const $cursos = document.getElementById("cursos");

courses.forEach(function (course) {
  const tarjeta = document.createElement("div");

  tarjeta.className = "container_cursos";

  tarjeta.innerHTML = `
    <div class="izquierda">
      <img src=${course.image} alt="">
    </div>

    <div class="centro">
      <p>${course.name}</p>
    </div>

    <div class="derecha">
      <div class="derecha_contenido">
        <p>
          ${course.lessons} <br>
          Lessons
        </p>
      </div>
    </div>
  `;

  $cursos.appendChild(tarjeta);

});
