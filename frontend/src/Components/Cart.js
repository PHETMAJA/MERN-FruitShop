import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import '../Assets/Styles/Cart.css';

export default function Cart() {
  return (
    <div className="cart-container">
      <Link to="/cart">
        <Badge count={0}>
          <ShoppingCartOutlined className="cart-icon" />
        </Badge>
      </Link>
    </div>
  );
}
