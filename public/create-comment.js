async function commentBtn(event) {

  const post_id = event.target.dataset.id;
  const comment_text = document.querySelector(`#comment-${post_id}-text`).value;


  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
      console.log(comment_text);
    } else {
      alert(response.statusText);
    }
  }
}

$(".comment-btn").click(commentBtn)