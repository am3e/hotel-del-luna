import React from 'react'
import staffData from '../data/staffData'

export default function About() {
    const staff = staffData.data.staff
    const [staffMembers, setStaffMembers] = React.useState([])

    function getStaff() {
        let staffElements = staff.map(member => {
            return (
                <div key={member.id} id={member.id} className={`staff ${member.id === "1-JM" || member.id === "2-GC" ? 'main' : 'other' }`}>
                    <img className="staffimg" src={member.portrait} alt={member.characterName} />
                    <div className="staffinfo">
                        <h3 className="staff-title">{member.characterName}, {member.jobTitle}</h3>
                        <p className="staff-desc">{member.characterDescription} - Potrayed by {member.portrayedBy}</p>
                    </div>
                </div>
            )
        })
        setStaffMembers(staffElements)
    }

    React.useEffect(getStaff, [])

    return (
        <section className="about">
            <h1>About</h1>
            <img src="./cast-photos/Hotel-Del-Luna-Cast.png" alt="team photo" className="fill-img" width="100%" />
            <div className="staffMember">
                {staffMembers}
            </div>
            <img src="./cast-photos/Hotel-Del-Luna-Reading.png" alt="cast reading photo" className="fill-img"/>
        </section>
    )

}