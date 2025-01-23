<script>
  let currentIndex = 1;

  const images = [
    {src: '/images/chair.webp'},
    {src: '/images/class.webp'},
    {src: '/images/seal.webp'},
  ];

  const next = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };

  const prev = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };
</script>
  
  <div class="h-[calc(100vh-10rem)] gap-4 overflow-auto p-4 rounded-md">
    <section class="bg-gradient-to-tr from-green-500 to-yellow-300 text-[#0f172a] py-12 rounded-t-md">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">Begleitung für unvergessliche Zoo-Erlebnisse</h2>
        <p class="text-lg mb-8">Wir bieten liebevolle Spezialbegleitungen, damit Sie die Wunder des Zoos in vollen Zügen geniessen können.</p>
        <a href="contact" class="bg-white text-green-500 py-3 px-6 rounded shadow hover:bg-yellow-300">Kontakt aufnehmen</a>
        <div class="relative w-full max-w-4xl mx-auto pt-12 rounded">
          <!-- Carousel images -->
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              style="transform: translateX(-{currentIndex * 100}%)">
              {#each images as image}
                <div class="w-full flex-shrink-0">
                  <img src={image.src} alt="carousel" class="place-self-center w-1/2 h-auto object-cover rounded-md mx-auto" />
                </div>
              {/each}
            </div>
          </div>
        
          <!-- Controls -->
          <button on:click={prev} class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-md">
            &lt
          </button>
          <button on:click={next} class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-green-500 p-2 rounded-md">
            &gt
          </button>
        </div>
    </section>
    <!-- Services Section -->
    <section id="services" class="bg-white text-[#0f172a] pb-20 px-20 pt-8 rounded-b-md">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Unsere Dienstleistungen</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 border rounded shadow">
            <h3 class="text-2xl font-semibold mb-4">Individuelle Begleitung</h3>
            <p>Wir sorgen dafür, dass jede Tour auf die Bedürfnisse und Wünsche der Person abgestimmt ist.</p>
          </div>
          <div class="p-6 border rounded shadow">
            <h3 class="text-2xl font-semibold mb-4">Barrierefreiheit</h3>
            <p>Wir stellen sicher, dass der Besuch für Menschen mit Mobilitätsproblemen angenehm ist.</p>
          </div>
          <div class="p-6 border rounded shadow">
            <h3 class="text-2xl font-semibold mb-4">Sicherheit und Komfort</h3>
            <p>Unser Team kümmert sich um alles, damit der Tag stressfrei und sicher verläuft.</p>
          </div>
        </div>
      </div>
    </section>
  </div>



