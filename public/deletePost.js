const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/polls/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashbaord');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);