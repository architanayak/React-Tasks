import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { Col, Row } from 'reactstrap'

const data = [
  {
    text: 'apple.jpg',
    img: "https://www.w3schools.com/images/w3schools_green.jpg",
    name: 'Apple'
  },
  {
    text: 'samsung.jpg',
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
    name: 'Samsung'
  },
  {
    text: 'xiomi.jpg',
    img: 'https://www.tutorialrepublic.com/images/sky.jpg',
    name: 'Xiomi'
  },
  {
    text: 'oneplus.jpg',
    img: 'https://www.google.com/search?q=iphone+xs+max&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXo67NwJ_iAhXNknAKHT5QAQ8Q_AUIDigB&biw=1299&bih=669#imgrc=QtNGP84Hp_lsEM:',
    name: 'One Plus'
  },
  {
    text: 'google.jpg',
    img: 'https://www.google.com/search?q=iphone+xs+max&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXo67NwJ_iAhXNknAKHT5QAQ8Q_AUIDigB&biw=1299&bih=669#imgrc=QtNGP84Hp_lsEM:',
    name: 'Google'
  },
  {
    text: 'huawei.jpg',
    img: 'https://www.google.com/search?q=iphone+xs+max&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXo67NwJ_iAhXNknAKHT5QAQ8Q_AUIDigB&biw=1299&bih=669#imgrc=QtNGP84Hp_lsEM:',
    name: 'Huawei'
  },
  {
    text: 'htc.jpg',
    img: 'https://www.google.com/search?q=iphone+xs+max&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXo67NwJ_iAhXNknAKHT5QAQ8Q_AUIDigB&biw=1299&bih=669#imgrc=QtNGP84Hp_lsEM:',
    name: 'HTC'
  },
  {
    text: 'lg.jpg',
    img: 'https://www.google.com/search?q=iphone+xs+max&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXo67NwJ_iAhXNknAKHT5QAQ8Q_AUIDigB&biw=1299&bih=669#imgrc=QtNGP84Hp_lsEM:',
    name: 'LG'
  },
  {
    text: 'lenovo.jpg',
    img: 'https://www.google.com/search?q=iphone+xs+max&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXo67NwJ_iAhXNknAKHT5QAQ8Q_AUIDigB&biw=1299&bih=669#imgrc=QtNGP84Hp_lsEM:',
    name: 'Lenovo'
  },
  {
    text: 'nokia.jpg',
    img: 'https://www.google.com/search?q=iphone+xs+max&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXo67NwJ_iAhXNknAKHT5QAQ8Q_AUIDigB&biw=1299&bih=669#imgrc=QtNGP84Hp_lsEM:',
    name: 'Nokia'
  },
]

export const Child1 = (props) => {
  const changeColor = (name) => {
    if (props.selectedItem.name === name) {
      return 'whitesmoke'
    } else {
      return ''
    }
  }
  return (
    <div className='child1'>
      {data.map((item, key) => {
        return (
          <div
            key={key}
            className='child1-items'
            onClick={() => props.getSelectedItem(item)}
            style={{ backgroundColor: changeColor(item.name) }}
          >
            <Row>
              <Col sm={2}>
                <input type='checkbox'
                  checked={props.selectedItem ? (props.selectedItem.name === item.name) : null}
                  className='checkbox'
                />
              </Col>
              <Col sm={4}>
                {item.name}
              </Col>
              <Col sm={4}>
                <FaFilePdf />
              </Col>
            </Row>
          </div>
        )
      })}
    </div>
  )
}