const agentsGrid = document.querySelector('.agents-grid');
const agentsData = [
    {
        image: "assets/agents/Omen.png",
        name: "Omen",
        role: "CONTROLLER",
        desc: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to uncover where he might strike next.",
        abilities: [
            {
                skillName: "Q - PARANOIA:",
                skillDesc: "Send out an ethereal shadow in a straight line, Nearsighting anyone it touches.",
            },
            {
                skillName: "E - DARK COVER:",
                skillDesc: "Cast an orb that bursts into a sphere of shadow obscuring vision.",
            },
            {
                skillName: "C - SHROUDED STEP:",
                skillDesc: "After a delay, teleport a short distance.",
            },
            {
                skillName: "X - FROM THE SHADOWS:",
                skillDesc: "Select anywhere on the map to teleport and reform.",
            }
        ]
    },
    {
        image: "assets/agents/Jett.png",
        name: "Jett",
        role: "DUELIST",
        desc: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
        abilities: [
            {
                skillName: "Q - UPDRAFT:",
                skillDesc: "Propel yourself upward after a brief wind-up.",
            },
            {
                skillName: "E - TAILWIND:",
                skillDesc: "Immediately dash a short distance in the direction you're moving.",
            },
            {
                skillName: "C - CLOUDBURST:",
                skillDesc: "Throw out a cloud of fog that obscures vision on impact.",
            },
            {
                skillName: "X - BLADE STORM:",
                skillDesc: "Equip a set of throwing knives that recharge on kills.",
            }
        ]
    },
    {
        image: "assets/agents/Sage.webp",
        name: "Sage",
        role: "SENTINEL",
        desc: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm center to a hellish battlefield.",
        abilities: [
            {
                skillName: "Q - SLOW ORB:",
                skillDesc: "Cast a slow-creating orb that detonates upon landing.",
            },
            {
                skillName: "E - HEALING ORB:",
                skillDesc: "Heal an ally or yourself over time.",
            },
            {
                skillName: "C - BARRIER ORB:",
                skillDesc: "Create a solid wall that blocks movement.",
            },
            {
                skillName: "X - RESURRECTION:",
                skillDesc: "Target a friendly corpse. After a short delay, revive them with full health.",
            }
        ]
    },
    {
        image: "assets/agents/Phoenix.webp",
        name: "Phoenix",
        role: "DUELIST",
        desc: "Hailing from the UK, Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
        abilities: [
            {
                skillName: "Q - CURVEBALL:",
                skillDesc: "Cast a curving flare that blinds anyone who looks at it.",
            },
            {
                skillName: "E - HOT HANDS:",
                skillDesc: "Throw a fireball that explodes after a delay or upon impact with the ground.",
            },
            {
                skillName: "C - BLAZE:",
                skillDesc: "Cast a line of flame that blocks vision and damages players passing through it.",
            },
            {
                skillName: "X - RUN IT BACK:",
                skillDesc: "Mark your current location. While active, dying or allowing the timer to expire will return Phoenix to this location with full health.",
            }
        ]
    },
    {
        image: "assets/agents/Sova.webp",
        name: "Sova",
        role: "INITIATOR",
        desc: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
        abilities: [
            {
                skillName: "Q - SHOCK BOLT:",
                skillDesc: "Fire an explosive bolt that emits a damaging pulse of static energy upon impact.",
            },
            {
                skillName: "E - RECON BOLT:",
                skillDesc: "Fire a bolt that deploys a sonar emitter, tagging nearby enemies.",
            },
            {
                skillName: "C - OWL DRONE:",
                skillDesc: "Deploy a drone that can be piloted to scout and tag enemies.",
            },
            {
                skillName: "X - HUNTER'S FURY:",
                skillDesc: "Fire up to three energy blasts that penetrate walls and damage enemies.",
            }
        ]
    },
    {
        image: "assets/agents/Killjoy.webp",
        name: "Killjoy",
        role: "SENTINEL",
        desc: "The genius of Germany, Killjoy secures the battlefield with an arsenal of devices. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
        abilities: [
            {
                skillName: "Q - ALARMBOT:",
                skillDesc: "Deploy a bot that hunts down enemies that get in range.",
            },
            {
                skillName: "E - TURRET:",
                skillDesc: "Deploy an automated turret that fires at enemies in a 180-degree cone.",
            },
            {
                skillName: "C - NANOSWARM:",
                skillDesc: "Throw a grenade that goes covert when landing. Activate to deploy a damaging swarm of nanobots.",
            },
            {
                skillName: "X - LOCKDOWN:",
                skillDesc: "Deploy a device that detains all enemies caught in its radius after a windup.",
            }
        ]
    },
    {
        image: "assets/agents/Breach.png",
        name: "Breach",
        role: "INITIATOR",
        desc: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
        abilities: [
            {
                skillName: "Q - FLASHPOINT:",
                skillDesc: "Launches a blinding charge through walls, blinding all players looking at it.",
            },
            {
                skillName: "E - FAULT LINE:",
                skillDesc: "Unleashes a seismic blast in a line, dazing all players in its zone; holding fire increases its range.",
            },
            {
                skillName: "C - AFTERSHOCK:",
                skillDesc: "Fires a slow burst through walls, dealing heavy damage to those in its area.",
            },
            {
                skillName: "X - ROLLING THUNDER:",
                skillDesc: "Sends a cascading quake through all terrain in a large cone, dazing and knocking up anyone caught in it.",
            }
        ]
    },
    {
        image: "assets/agents/Cypher.png",
        name: "Cypher",
        role: "SENTINEL",
        desc: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        abilities: [
            {
                skillName: "Q - CYBER CAGE:",
                skillDesc: "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.",
            },
            {
                skillName: "E - SPYCAM:",
                skillDesc: "EQUIP a spycam. FIRE to place the spycam at the targeted location.",
            },
            {
                skillName: "C - TRAPWIRE:",
                skillDesc: "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite.",
            },
            {
                skillName: "X - NEURAL THEFT:",
                skillDesc: "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.",
            }
        ]
    },
    {
        image: "assets/agents/Skye.png",
        name: "Skye",
        role: "INITIATOR",
        desc: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
        abilities: [
            {
                skillName: "Q - TRAILBLAZER:",
                skillDesc: "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.",
            },
            {
                skillName: "E - GUIDING LIGHT:",
                skillDesc: "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair.",
            },
            {
                skillName: "C - REGROWTH:",
                skillDesc: "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight.",
            },
            {
                skillName: "X - SEEKERS:",
                skillDesc: "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers.",
            }
        ]
    },
    {
        image: "assets/agents/Yoru.png",
        name: "Yoru",
        role: "DUELIST",
        desc: "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        abilities: [
            {
                skillName: "Q - BLINDSIDE:",
                skillDesc: "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.",
            },
            {
                skillName: "E - GATECRASH:",
                skillDesc: "EQUIP a rift tether FIRE to send the tether forward. ALT FIRE to place a stationary tether. ",
            },
            {
                skillName: "C - FAKEOUT:",
                skillDesc: "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo.",
            },
            {
                skillName: "X - DIMENSIONAL DRIFT:",
                skillDesc: "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru's dimension early.",
            }
        ]
    }
]

agentsData.forEach(agent => {
    agentsGrid.innerHTML += `
    <div class="agent-card" id="${agent.name.toLowerCase()}">
        <div class="agent-image">
            <img src="${agent.image}" alt="${agent.name}">
        </div>
        <div class="agent-info">
            <h2>${agent.name}</h2>
            <div class="agent-role">
                <span class="role-tag">${agent.role}</span>
            </div>
            <div class="agent-description">
                <p>${agent.desc}</p>
            </div>
        </div>
        <div class="agent-abilities">
            <h3>ABILITIES</h3>
            <ul>
                <li><span>${agent.abilities[0].skillName}</span> ${agent.abilities[0].skillDesc}</li>
                <li><span>${agent.abilities[1].skillName}</span> ${agent.abilities[1].skillDesc}</li>
                <li><span>${agent.abilities[2].skillName}</span> ${agent.abilities[2].skillDesc}</li>
                <li><span>${agent.abilities[3].skillName}</span> ${agent.abilities[3].skillDesc}</li>
            </ul>
        </div>
    </div>`;
});