const products = {
  bicycles: {
    r5 = {
      model: 'R5',
      type: "Road bike - Full carbon",
      product_id: 'RB_R501',
      image: "https://www.cervelo.com/media/catalog/product/m/y/my22-dura-ace-di2-five-black.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: 'The new R5 frame is 130g lighter than the previous model—a 16% reduction from an already-light frame.  And while aerodynamics weren’t a focus with this frame the way they would be on an S5 or P5, bringing the cables inside reduced drag by 25g.',
        type: "Complete bike",
        brake_type: "Disc",
        groupset: "Dura Ace Di2",
        sizes: [48, 51, 54, 56, 58, 61]
      },
      net_price: 3254,
      vat: 682,
      full_price: 3936,
      stock: 1000,
    },
    s5 = {
      model: 'S5',
      type: "Road bike - Full carbon",
      product_id: 'RB_S501',
      image: "https://www.cervelo.com/media/catalog/product/s/5/s5-dred-axs-iron-oxide-profile.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: 'The S5 prioritizes aerodynamic performance and stiffness, making it a platform preferred by the fastest sprinters in the world. Don’t think it’s a one-trick pony, though—despite the lateral stiffness, the S5 delivers an incredibly comfortable ride. You’ve no doubt noticed the now-iconic V-Stem. We optimized that shape to deliver the best possible performance in the wind, hid the cables inside, and make enough bar/stem/stack options to fit just about anyone.',
        type: "Complete bike",
        brake_type: "Disc",
        groupset: "Dura Ace Di2",
        sizes: [48, 51, 54, 56, 58]
      },
      net_price: 3254,
      vat: 682,
      stock: 1000,
    },
    caledonia5 = {
      model: 'Caledonia 5',
      type: "Road bike - Full carbon",
      product_id: 'RB_C501',
      image: "https://www.cervelo.com/media/catalog/product/c/a/caledonia-5-red-axs-five-black.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: 'The Caledonia is the bike we keep reaching for when we know the odometer’s going well past the triple-digit mark. Long rides invariably have some smooth tarmac, some junk pavement over backroads, a cutty singletrack connector, and maybe even your own local Strade Bianche sector. So we built a bike that could take on all of them, do it well, and fit fenders in case the ominous clouds turn into a downpour 130km into your day.',
        type: "Complete bike",
        brake_type: "Disc",
        groupset: "Red eTAP AXS",
        sizes: [48, 51, 54, 56, 58, 61]
      },
      net_price: 3254,
      vat: 682,
      stock: 1000,
    },
    caledonia = {
      model: 'Caledonia',
      type: "Road bike - Full carbon",
      product_id: 'RB_C001',
      image: "https://www.cervelo.com/media/catalog/product/c/a/caledonia-rival-axs-gloss_black.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: "Caledonia doesn’t fit in a box nicely, and we like it that way. It was conceived on our Thursday night rides—routes that often play fast and loose with ‘road ride.’ As we tried to stuff bigger tires into our R5s and streamline our Asperos, a new kind of bike was born. When we design a bike, we start with our library of tube shapes. These shapes are tubes we’ve used on other models that we know to have various qualities—aerodynamic, stiff, ultralight, etc.—and they help get us to the refinement stage on a bike more quickly. In the case of Caledonia, we wanted durability, lightweight, and aerodynamics to be in balance and selected a package that achieved the performance demands of this kind of race bike.",
        type: "Complete bike",
        brake_type: "Disc",
        groupset: "105",
        sizes: [48, 51, 54, 56, 58, 61]
      },
      net_price: 3254,
      vat: 682,
      stock: 1000,
    },
    p5 = {
      model: 'P5',
      type: "Triathlon bike - Full carbon",
      product_id: 'RB_P501',
      image: "https://www.cervelo.com/media/catalog/product/p/5/p5-purple-sunset.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: "For the P5 we focused entirely on aero performance—within the boxes defined by the UCI, anyway. We applied years of experience in engineering the fastest aero bikes and real-world testing with our pro athletes. The result is a bike that pushes the boundaries in every way possible. We spent hours in CFD, FEA, and ISO testing and the reviews came back from our athletes: BRB. ",
        type: "Complete bike",
        brake_type: "Disc",
        groupset: "Force eTAP AXS 1",
        sizes: [48, 51, 54, 56, 58]
      },
      net_price: 3254,
      vat: 682,
      stock: 1000,
    },
    p_series = {
      model: 'P Series',
      type: "Triathlon bike - Full carbon",
      product_id: 'RB_PS01',
      image: "https://www.cervelo.com/media/catalog/product/m/y/my21_pseries_ultegradi2_carbon_black.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: "The P-Series is for the athlete seeking speed, storage, value, and comfort. It’s our no-nonsense machine engineered to get you from A to B as fast as possible. It’s a no-excuses machine and your perfect PR sidekick. It’s lighter and more aero than its predecessor, the P3, making it faster on all courses. Naturally, aerodynamics and weight are only part of the equation—the P-series comes with a 500mL aero bottle, 400mL of top tube storage, and an integrated rear hydration mount. Customize the cockpit and the storage to your needs and your race.",
        type: "Complete bike",
        brake_type: "Disc",
        groupset: "105",
        sizes: [48, 51, 54, 56, 58, 61]
      },
      net_price: 3254,
      vat: 682,
      stock: 1000,
    },
    px_series = {
      model: 'PX Series',
      type: "Triathlon bike - Full carbon",
      product_id: 'RB_PX01',
      image: "https://www.cervelo.com/media/catalog/product/p/x/px-frameset-kailua-bay.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: "Triathletes are the kings and queens of ritual. Of hyper-focus and discipline. Who revel in the complexity and details—not in one sport, but three. It’s the same attention to detail that fueled the development of our PX-Series. Born from advanced aero testing, this machine features an innovative silhouette, improved aerodynamics, stiffness, and cockpit construction, while providing rider-efficient fueling and travel solutions. It’s not UCI-legal—as you probably guessed by the shape—and it was never meant to be. It’s a triathlon bike first and foremost and meets the needs of the world’s elite triathletes.",
        type: "Frameset",
        brake_type: "Disc",
        groupset: "105",
        sizes: [51, 56, 58, 61]
      },
      net_price: 3254,
      vat: 682,
      stock: 1000,
    },
    aspero5 = {
      model: 'Aspero 5',
      type: "Gravel bike - Full carbon",
      product_id: 'RB_A501',
      image: "https://www.cervelo.com/media/catalog/product/a/s/aspero-5-red-xplr-sunset.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: "FLAT OUT. That’s how Áspero debuted under the characters of the Wednesday Night Rough Club two years ago, and that’s how it’s stayed. And since, at Cervélo, we know that flat out doesn’t stay flat out for long without a little help from science, we’ve come back from the drawing board with a new Áspero. A faster Áspero, a lighter Áspero, and—dare we say it—an even better looking Áspero.",
        type: "Complete bike",
        brake_type: "Disc",
        groupset: "Red XPLR eTAP AXS",
        sizes: [48, 51, 54, 56, 58, 61]
      },
      net_price: 3254,
      vat: 682,
      stock: 1000,
    },
    aspero = {
      model: 'Aspero',
      type: "Gravel bike - Full carbon",
      product_id: 'RB_A001',
      image: "https://www.cervelo.com/media/catalog/product/a/s/aspero-grx-rx815-di2-purple-sunset_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=1200&canvas=1200:800",
      characteristics: {
        text: "A new breed of rider is emerging—one who loves the freedom and exploration that gravel culture was founded upon but who has a hunger to ride hard, to go all out, and to explore not just geography but personal limits. This frontier requires a new kind of gravel machine, one engineered not to roam the trails, but to race them.",
        type: "Complete bike",
        brake_type: "Disc",
        groupset: "GRX",
        sizes: [48, 51, 54, 56, 58, 61]
      },
      net_price: 3254,
      vat: 682,
      stock: 1000,
    },
    
    

  }
};

