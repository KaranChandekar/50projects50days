const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
        <div class="key">
            a
            <small>event.key</small>
        </div>
        <div class="key">
            65
            <small>event.keyCode</small>
        </div>
        <div class="key">
            KeyA
            <small>event.code</small>
        </div>
  `;
});
