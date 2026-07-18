
    const subscribeBtn = document.getElementById('subscribe-btn');
    let isSubscribed = false;

    subscribeBtn.addEventListener('click', () => {
      isSubscribed = !isSubscribed;
      if (isSubscribed) {
        subscribeBtn.textContent = 'Subscribed ✓';
        subscribeBtn.classList.add('subscribed');
      } else {
        subscribeBtn.textContent = 'Subscribe';
        subscribeBtn.classList.remove('subscribed');
      }
    });

  
    const likeBtn = document.getElementById('like-btn');
    const likeIcon = document.getElementById('like-icon');
    const likeCount = document.getElementById('like-count');
    let likes = 4000;
    let hasLiked = false;

    likeBtn.addEventListener('click', () => {
      hasLiked = !hasLiked;
      if (hasLiked) {
        likes++;
      
        likeIcon.className = 'fa-solid fa-heart liked-active';
      } else {
        likes--;
      
        likeIcon.className = 'fa-regular fa-heart';
      }
      likeCount.textContent = likes.toLocaleString();
    });

   
    const shareBtn = document.getElementById('share-btn');
    const shareIcon = document.getElementById('share-icon');
    const shareText = document.getElementById('share-text');

    shareBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        shareText.textContent = "Copied!";
        shareIcon.className = "fa-solid fa-check copied-active";
        
        
        setTimeout(() => {
          shareText.textContent = "1k";
          shareIcon.className = "fa-solid fa-share";
        }, 1500);
      });
    });

   
    document.getElementById('message-btn').addEventListener('click', () => {
      alert("Redirecting to Hashmat's mailbox: hashmat@example.com");
    });
