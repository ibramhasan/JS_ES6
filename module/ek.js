//file: module/ek.js
export default (brand) => (
    {
      brand: brand,
      drive() {
        console.log(this.brand, ' drive');
      }
    }
  )