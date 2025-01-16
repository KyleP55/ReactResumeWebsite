export default function setBodyHeight() {
    const prof = window.getComputedStyle(document.getElementById("profileBody"));
    const page = document.getElementById("pageInfo");

    page.style.height = prof.height;
    console.log(prof.height)
}