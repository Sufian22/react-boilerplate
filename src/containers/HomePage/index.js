import React from 'react';
import './index.css';
import SignPanel from '../../components/SignPanel/SignPanel';
import ProductList from '../../components/ProductList/ProductList';

function ProductItem(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
}

var products = [
  new ProductItem(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nam sit ametvehicula turpis. Nam iaculis placerat enim ut imperdiet. Aenean commodo,erat ac feugiat fringilla, sem leo pharetra turpis, eget congue augueorci malesuada magna. Nulla enim quam, vehicula vitae tortor sed,dapibus fermentum ligula. Nam mattis dignissim imperdiet. In variuslacinia arcu, eget egestas eros porta et. Aenean consectetur purus necluctus accumsan.',
    '12',
  ),
  new ProductItem(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nam sit ametvehicula turpis. Nam iaculis placerat enim ut imperdiet. Aenean commodo,erat ac feugiat fringilla, sem leo pharetra turpis, eget congue augueorci malesuada magna. Nulla enim quam, vehicula vitae tortor sed,dapibus fermentum ligula. Nam mattis dignissim imperdiet. In variuslacinia arcu, eget egestas eros porta et. Aenean consectetur purus necluctus accumsan.',
    '20',
  ),
  new ProductItem(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nam sit ametvehicula turpis. Nam iaculis placerat enim ut imperdiet. Aenean commodo,erat ac feugiat fringilla, sem leo pharetra turpis, eget congue augueorci malesuada magna. Nulla enim quam, vehicula vitae tortor sed,dapibus fermentum ligula. Nam mattis dignissim imperdiet. In variuslacinia arcu, eget egestas eros porta et. Aenean consectetur purus necluctus accumsan.',
    '15',
  ),
  new ProductItem(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nam sit ametvehicula turpis. Nam iaculis placerat enim ut imperdiet. Aenean commodo,erat ac feugiat fringilla, sem leo pharetra turpis, eget congue augueorci malesuada magna. Nulla enim quam, vehicula vitae tortor sed,dapibus fermentum ligula. Nam mattis dignissim imperdiet. In variuslacinia arcu, eget egestas eros porta et. Aenean consectetur purus necluctus accumsan.',
    '15',
  ),
  new ProductItem(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nam sit ametvehicula turpis. Nam iaculis placerat enim ut imperdiet. Aenean commodo,erat ac feugiat fringilla, sem leo pharetra turpis, eget congue augueorci malesuada magna. Nulla enim quam, vehicula vitae tortor sed,dapibus fermentum ligula. Nam mattis dignissim imperdiet. In variuslacinia arcu, eget egestas eros porta et. Aenean consectetur purus necluctus accumsan.',
    '12',
  ),
  new ProductItem(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nam sit ametvehicula turpis. Nam iaculis placerat enim ut imperdiet. Aenean commodo,erat ac feugiat fringilla, sem leo pharetra turpis, eget congue augueorci malesuada magna. Nulla enim quam, vehicula vitae tortor sed,dapibus fermentum ligula. Nam mattis dignissim imperdiet. In variuslacinia arcu, eget egestas eros porta et. Aenean consectetur purus necluctus accumsan.',
    '20',
  ),
  new ProductItem(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nam sit ametvehicula turpis. Nam iaculis placerat enim ut imperdiet. Aenean commodo,erat ac feugiat fringilla, sem leo pharetra turpis, eget congue augueorci malesuada magna. Nulla enim quam, vehicula vitae tortor sed,dapibus fermentum ligula. Nam mattis dignissim imperdiet. In variuslacinia arcu, eget egestas eros porta et. Aenean consectetur purus necluctus accumsan.',
    '15',
  ),
  new ProductItem(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nam sit ametvehicula turpis. Nam iaculis placerat enim ut imperdiet. Aenean commodo,erat ac feugiat fringilla, sem leo pharetra turpis, eget congue augueorci malesuada magna. Nulla enim quam, vehicula vitae tortor sed,dapibus fermentum ligula. Nam mattis dignissim imperdiet. In variuslacinia arcu, eget egestas eros porta et. Aenean consectetur purus necluctus accumsan.',
    '15',
  ),
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegisterForm: false,
      loginSuccess: false,
    };
  }

  setShowRegisterForm = () =>
    this.setState({ showRegisterForm: !this.state.showRegisterForm });

  setLoginSuccess = () =>
    this.setState({ loginSuccess: !this.state.loginSuccess });

  render() {
    const { showRegisterForm, loginSuccess } = this.state;
    return (
      <div className="homePage">
        {(showRegisterForm || (!showRegisterForm && !loginSuccess)) && (
          <SignPanel
            showRegisterForm={showRegisterForm}
            setShowRegisterForm={this.setShowRegisterForm}
            loginSuccess={loginSuccess}
            setLoginSuccess={this.setLoginSuccess}
          />
        )}
        {!showRegisterForm &&
          loginSuccess && (
            <div>
              <ProductList products={products} />
            </div>
          )}
      </div>
    );
  }
}

export default HomePage;
