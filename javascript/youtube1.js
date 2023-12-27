document.addEventListener('DOMContentLoaded', function () {
    // Mengganti video ketika link di playlist diklik
    const playlistLinks = document.querySelectorAll('.playlist a');
    playlistLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const videoId = this.getAttribute('data-video-id');
            const iframe = document.querySelector('.video-container iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
        });
    });
});
