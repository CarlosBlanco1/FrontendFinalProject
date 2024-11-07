# FrontendFinalProject

- An elevator pitch of your project (something you can say in less than 1 minute)
  - It will be an app for adopting pets developed using nextJs and dotnet (for API). The user will be able to sign into the platform and view all the possible pets to adopt. They will be able to filter based on animal, breed, age, etc. Potentially, adding real time messaging platform between pet owners and people that are interested, using websockets. They will be able to fill out and submit a form to adopt one of the pets. If you're a pet owner, you will be able to keep track of the appliations submitted for your pets, as well as adding new pets with picture of them. Potentially it could use google maps API in order to show the location of the shelters or whatever information.
  
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

 Overall Rubric:

| Feature                                           | Score (/3) | Completed |
|---------------------------------------------------|------------|-----------|
| Use of Local Storage                              | []         | [ ]       |
| Client side state stores (e.g., context or React Query) | []  | [ ]       |
| Toasts / Global Notifications or Alerts           | []         | [ ]       |
| Error Handling (both on API requests and render errors) | [] | [ ]       |
| Network Calls                                     | []         | [ ]       |
| - Read Data                                       | []         | [ ]       |
| - Write Data                                      | []         | [ ]       |
| WebSocket                                         | []         | [ ]       |
| Developer Type Helping (TypeScript)               | []         | [ ]       |
| 10+ Pages/Views via a Router                      | []         | [ ]       |
| CI/CD Pipeline                                    | []         | [ ]       |
| Live Production Environment                       | []         | [ ]       |
| Automated Testing and Linting in the Pipeline (abort build if fails) | [] | [ ] |
| 3+ Reusable Form Input Components                 | []         | [ ]       |
| 4+ Reusable Layout Components                     | []         | [ ]       |
| Authentication and User Account Support           | []         | [ ]       |
| Authorized Pages and Public Pages                 | []         | [ ]       |

Goals by Week:

---

## Due Nov 6 - Core Components and State Management
| Feature                                           | Score (/3) | Completed |
|---------------------------------------------------|------------|-----------|
| Network Calls                                     | [3]         | [X]       |
| - Read Data                                       | [3]         | [X]       |
| - Write Data                                      | [3]         | [X]       |
| Error Handling (both on API requests and render errors) | [0] | [ ]       |

Self Evaluation:
- Everything went pretty well, I think I'm on the right track. The only thing I;m worried about is the separationof concerns between my server and client components. Specially with ahndling submissions, I'm not sure I'm doing it right.

---

## Due Nov 9 - Developer Support and Basic Interactivity
| Feature                                           | Score (/3) | Completed |
|---------------------------------------------------|------------|-----------|
| 3+ Reusable Form Input Components                 | []         | [ ]       |
| 4+ Reusable Layout Components                     | []         | [ ]       |
| Client Side State Stores (e.g., context or React Query) | []  | [ ]       |
| Use of Local Storage                              | []         | [ ]       |


---

## Due Nov 13 - Networking and Error Handling
| Feature                                           | Score (/3) | Completed |
|---------------------------------------------------|------------|-----------|
| Developer Type Helping (TypeScript)               | []         | [ ]       |
| Toasts / Global Notifications or Alerts           | []         | [ ]       |
| Authentication and User Account Support           | []         | [ ]       |

---

## Due Nov 16 - Routing and Access Control
| Feature                                           | Score (/3) | Completed |
|---------------------------------------------------|------------|-----------|
| 10+ Pages/Views via a Router                      | []         | [ ]       |
| Authorized Pages and Public Pages                 | []         | [ ]       |
| WebSocket (if applicable)                         | []         | [ ]       |

---

## Due Nov 20 - Production Readiness and CI/CD
| Feature                                           | Score (/3) | Completed |
|---------------------------------------------------|------------|-----------|
| CI/CD Pipeline                                    | []         | [ ]       |
| Automated Testing and Linting in the Pipeline (abort build if fails) | [] | [ ] |
| Live Production Environment                       | []         | [ ]       |

---

## Due Nov 23 - Refactoring and Testing
| Feature                                           | Score (/3) | Completed |
|---------------------------------------------------|------------|-----------|
| Final Testing and Error Handling Improvements     | []         | [ ]       |
| Code Refactoring and Optimization                 | []         | [ ]       |

---

## Due Dec 4 - Final Review and Project Completion
| Feature                                           | Score (/3) | Completed |
|---------------------------------------------------|------------|-----------|
| Documentation and Code Cleanup                    | []         | [ ]       |
| Final Deployment and QA                           | []         | [ ]       |
