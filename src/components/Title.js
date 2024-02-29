import React from 'react'

function Title({name, allProjects}) {
  return (
    <div>
    <div className='roboto-large' style={{marginTop:"100px", float: "left", textAlign:"left", position:"absolute", left:"20%", right:"20%"}}>
      {name}
      <div>
        <hr
          style={{
            background: 'grey',
            color: 'grey',
            borderColor: 'grey',
            height: '3px',
            width: '100%'
          }}
        />
      </div>
    </div>
      <div style={{marginTop:"220px", float: "left", textAlign:"left", position:"absolute", left:"20%", right:"20%"}}>{allProjects}</div>
    </div>
  )
}

export default Title