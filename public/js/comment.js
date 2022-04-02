async function commentFormHandler(event) {
      event.preventDefault();
      const comment_text = document
      .querySelector('textarea[name="comment-body"]')
      .value.trim();
    //find the blogpost id. 
    var url = window.location.pathname;
    var blogpost_id = url.substring(url.lastIndexOf('/') + 1);
      if (comment_text) {
        const response = await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify({
            blogpost_id,
            comment_text,
    
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.ok) {
          document.location.reload();
        } else {
          alert("aa" + response.statusText);
          document.querySelector("#comment-form").style.display = "block";
        }
      }
    }
    
    document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);
    
    //GET all api/comments
       router.get("/", (req, res) => {
        // Access our User model and run .findAll() method
        Comment.findAll({})
          .then((commentData) => res.json(commentData))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      });
    
      //GET a single api/comments/id
      router.get("/:id", (req, res) => {
        Comment.findAll({
          where: {
            id: req.params.id,
          },
        })
      }
      )