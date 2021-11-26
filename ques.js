let person = [
    {
        'firstName': 'Devendra',
        'lastName': 'Kushwaha',
        'Office-Address': 'Delhi'
    },
    {
        'firstName': 'Rakesh',
        'lastName': 'Pandey',
        'Office-Address': 'Sikar'
    },
    {
        'firstName': 'Ashutosh',
        'lastName': 'Agrawal',
        'Office-Address': 'Kachh'
    }
]
for(let i=0;i<person.length;i++){
    let val=person[i];
    console.log(i+1);
for (let key in val) {
    console.log("|-"+key + " " + val[key]);
}

}
