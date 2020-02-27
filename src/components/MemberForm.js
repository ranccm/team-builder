import React, { useState } from 'react';

const MemberForm = props =>{
    // console.log("props", props);
    const [member, setMember] = useState({
        name: "",
        role: "", 
        email: "",
    });
    
    const handleChanges = e => {
        // console.log(member);

        setMember({...member, [e.target.name]: e.target.value});
        console.log("emember", member);
    };
    
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: "", role: "", email: "" });
    };

    return (
        
        <form onSubmit={submitForm}>

            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={member.name}
            />
            <label htmlFor="role">role</label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={handleChanges}
                value={member.role}
            />
            <label htmlFor="email">email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email}
            />
             <button type="submit">Add member</button>
        </form>
    )
}

export default MemberForm;