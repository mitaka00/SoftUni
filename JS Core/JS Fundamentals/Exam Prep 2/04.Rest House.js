function restHouse(availableRooms, guests) {
    let rooms = new Map();
    let guestsWithoutRooms = 0;
    for (let currentRoom of availableRooms) {
        let roomSpace = currentRoom.type === 'double-bedded' ? 2 : 3;
        rooms.set(currentRoom.number, { type: currentRoom.type, emptyBeds: roomSpace });
    }
    for (let currentPair of guests) {
        let roomFound = false;
        if (currentPair.first.gender !== currentPair.second.gender) {
            for (let [key, value] of rooms) {
                if (value.type === 'double-bedded' && value.emptyBeds === 2) {
                    value.guests = [];
                    value.guests = [currentPair.first, currentPair.second];
                    value.emptyBeds = 0;
                    roomFound = true;
                    break;
                }
            }
        } else {
            for (let [key, value] of rooms) {
                if (value.type === 'triple' && value.emptyBeds > 1) {
                    if (value.guests === undefined) {
                        value.guests = [];
                    } else if (value.guests[0].gender !== currentPair.second.gender) {
                        continue;
                    }
                    if (currentPair.first !== undefined) {
                        value.guests.push(currentPair.first);
                        value.emptyBeds -= 1;
                    }
                    value.guests.push(currentPair.second);
                    value.emptyBeds -= 1;
                    roomFound = true;
                    break;
                } else if (value.type === 'triple' && value.emptyBeds === 1) {
                    if (value.guests[0].gender === currentPair.second.gender) {
                        value.guests.push(currentPair.first === undefined ? currentPair.second : currentPair.first);
                        value.emptyBeds -= 1;
                        currentPair.first = undefined;
                    }
                }
            }
        }
        if (!roomFound) {
            guestsWithoutRooms += currentPair.first === undefined ? 1 : 2;
        }
    }
    for (let [room, value] of [...rooms].sort()) {
        console.log(`Room number: ${room}`);
        if (value.guests !== undefined) {
            for (let guest of value.guests.sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })) {
                console.log(`--Guest Name: ${guest.name}`);
                console.log(`--Guest Age: ${guest.age}`);
            }
        }
        console.log(`Empty beds in the room: ${value.emptyBeds}`);
    }
    console.log(`Guests moved to the tea house: ${guestsWithoutRooms}`);
}