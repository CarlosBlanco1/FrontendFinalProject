# FrontendFinalProject

- An elevator pitch of your project (something you can say in less than 1 minute)
  - It will be an app for adopting pets. The user will be able to sign into the platform and view all the possible pets to adopt. They will be able to filter based on animal, breed, age, etc. Potentially, adding real time messaging platform between pet owners and people that are interested, using websockets. They will be able to fill out and submit a form to adopt one of the pets. If you're a pet owner, you will be able to keep track of the appliations submitted for your pets, as well as adding new pets with picture of them. Potentially it could use google maps API in order to show the location of the shelters or whatever information.
  
- The names of the contributors (if you are working with a partner)
  - Only me, Carlos
  
- A rough list of features (this needs to be large enough to satisfy the "scope" requirements)
  - Use of local storage to save favorite filters, or favorite pets.
  - Context to keep track of the list of pets
  - Dotnet API in the backend that will keep track of all the pets and support CRUD operations to a postgreSQL database
  - Toasts after application submission, new messages, etc
  - input forms for adopting a pet, submitting a new pet if you're a shelter owner and for looking up a pet.
  - It will look at your role in the database and based on that it will determine if you're authorized to acess certain pages
  - Potential pages for users lookup pet, individual pet page, complete form page, shelters near you page, about the owner page.
  - Potential pages for the shelter owners, submit a new pet, look at your applications, chat with interested people.
  - About page for both
 
- A list of new things you will need to do to accomplish your project (e.g. websockets)
  - Web sockets for a real-life chat app between pet owners and interested people
  - Implementing Google Maps API to look at shelters near you
