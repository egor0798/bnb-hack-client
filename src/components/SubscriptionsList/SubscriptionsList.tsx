import React from 'react';
import { ISubscriptionPlan } from '../../model/Plan';
import './SubscriptionsList.scss';
import { Button } from 'antd';

const subs: ISubscriptionPlan[] = [
  {
    price: 10,
    reccuring: true,
    reccuringInterval: 30,
  },
  {
    price: 110,
    reccuring: true,
    reccuringInterval: 60,
  }
]

export const SubscriptionsList: React.FC = () => {
  return (
    <div className="subs-list">
      <div className="subs-list-header">
        <h2>Active subscriptions</h2>
        <Button type='primary' danger>Logout</Button>
      </div>
      {subs.map(item => (
        <div className="subs-list-item">
          <div className='info'>
            <h3>Subcription name</h3>
            <div className="details">
              <div className="item-data">
                <div>Price: </div>
                <div>{item.price}</div>
              </div>
              <div className="item-data">
                <div>Interval: </div>
                <div>{item.reccuringInterval} days</div>
              </div>
            </div>
          </div>
          <Button type="primary" danger className="delete-button">Cancel</Button>
        </div>
      ))}
    </div>
  )
}