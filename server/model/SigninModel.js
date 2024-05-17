const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await fetch('/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }) // Assuming these are defined
    });
  
    if (response.ok) {
      // Handle successful signin (e.g. redirect to another page)
    } else {
      // Handle error
    }
  };