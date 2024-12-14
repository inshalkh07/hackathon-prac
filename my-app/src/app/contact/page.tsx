const Contact = () => {
    return (
      <div className="py-20 px-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4 max-w-lg">
          <input type="text" placeholder="Name" className="w-full border px-4 py-2" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-2" />
          <textarea placeholder="Message" className="w-full border px-4 py-2" rows={6}></textarea>
          <button type="submit" className="px-6 py-2 bg-black text-white">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  