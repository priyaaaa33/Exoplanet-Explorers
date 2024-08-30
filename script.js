const planetData = {
    planet1: {
        image: 'planet1.jpg',
        description: `Name: Trappist 1e
Location: Constellation of Aquarius
Size and Mass: Mass is 0.692 times that of Earth's mass, diameter is 7,292 miles (11,736 km)
Composition: Denser iron core
Surface Condition: Solid rocky surface
Orbit Period: 6.1 days
Eccentricity: 0
Type of Star: M type
Age: 7.6 billion years
Potential for Life: One of the most promising exoplanets for potential life
Ongoing Studies: It could have conditions that make it inhospitable to life`
    },
    planet2: {
        image: 'planet2.jpg',
        description: `Name: Kepler 22B
Location: Constellation of Cygnus
Size and Mass: 2.4 times Earth's radius
Composition: Rock, iron, ice, and water
Surface Condition: Ocean covering most of its surface
Orbit Period: 289.9 days
Eccentricity: Less than 0.72
Habitable Zone: More than a 95% probability of being located in the empirical habitable zone defined by the recent Venus and early Mars limits
Atmospheric Conditions: Greenhouse effect
Temperature Range: 295 K
Discovery Method: Observing its transit between its star and us
Observing Instruments: Spitzer Space Telescope
Type of Star: G type
Star's Age: 4 billion years
Potential for Life: More than a 95% probability of being located in the empirical habitable zone
Ongoing Studies: Ongoing studies aim to discover a large number of new exoplanets`
    },
    planet3: {
        image: 'planet3.jpg',
        description: `Name: Proxima Centauri b
Location: Constellation of Centaurus
Size and Mass: Mass is 12.5% of the Sun's mass, diameter is 14% of the Sun's diameter
Composition: Rocky composition
Surface Conditions: Only 88% is active
Orbit Period: 550,000 years
Distance: 4.246 light years
Habitable Zone: 0.023 - 0.054 AU (3.4 - 8.1 million km) from the star
Atmospheric Conditions: Unknown
Temperature Range: 234 K (-39°C; -38°F)
Discovery Method: Doppler spectroscopy
Observing Instruments: HARPS, UVES
Type of Star: Red dwarf
Star's Age: 4.853 billion years
Potential for Life: High oxygen concentration
Ongoing Studies: Research is ongoing to understand its potential for life and its habitability`
    },
    planet4: {
        image: 'planet4.jpg',
        description: `Name: Kepler-186f
Location: Kepler 186 system
Size and Mass: 1.71 times Earth's mass
Composition: Not currently known
Surface Condition: Around 188 K (−85 °C; −121 °F)
Orbit Period: 129.9 days, 0.432 AU from its star
Habitable Zone: Located comfortably in the habitable zone
Atmospheric Conditions: Unknown
Temperature Range: Unknown
Discovery Method: Using the Kepler space telescope
Observing Instruments: Kepler space telescope
Type of Star: M type
Star's Age: 4 billion years
Potential for Life: Possibly supports life`
    },
    planet5: {
        image: 'planet5.jpg',
        description: `Name: Gliese 581g
Location: Constellation Libra
Size and Mass: 22 times Earth's mass
Composition: Rocky
Surface Condition: It has a high chance of supporting life
Orbit Period: 0 (incomplete information)
Habitable Zone: Unknown
Atmospheric Conditions: Unknown
Temperature Range: 209 to 228 K
Discovery Method: Radial velocity measurements
Observing Instruments: Unknown
Type of Star: Red dwarf
Star's Age: 10 billion years`
    }
};

function changePlanet(planet) {
    const info = planetData[planet];
    if (info) {
        document.getElementById('planet-image').src = info.image;
        document.getElementById('planet-description').innerText = info.description;
    } else {
        console.error('Planet data not found for:', planet);
    }
}

