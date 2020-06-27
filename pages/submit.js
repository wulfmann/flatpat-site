import Layout from '../layouts/default';

export default function() {
  function onSubmit(e) {
    e.preventDefault();
    alert('Thank you for your submission');
  }

  return (
    <Layout title="Submit">
      <section>
        <form onSumbit={onSubmit}>
          <label for="caption">Caption</label>
          <input type="text" name="caption"/>
          
          <label for="name">Name</label>
          <input type="text" name="name"/>
          
          <label for="file">Image</label>
          <input type="file" name="file"/>
        </form>
      </section>
    </Layout>
  )
}