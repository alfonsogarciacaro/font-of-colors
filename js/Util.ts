
interface Particle {
    x: number;
    y: number;
    xvel: number;
    yvel: number;
    c: [number, number, number];
    rot: number;
    rotVel: number;
}

export function updateParticle(dt: number, p: Particle): Particle {
    return {
        x: p.x + p.xvel * dt,
        y: p.y + p.yvel * dt,
        xvel: p.xvel,
        yvel: p.yvel + 1. * dt,
        rot: (p.rot + p.rotVel * dt) % (2. * 3.14159),
        rotVel: p.rotVel,
        c: p.c
    }
}
