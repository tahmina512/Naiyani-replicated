export class Leads {
  ASIN: string;
  Amazon_FBA_estimated_fees: string;
  Amazon_Price: string;
  Amazon_URL: string;
  Amazon_on_Listing: string;
  Est_Sales_Rank: string;
  Estimated_Gross_Profit: string;
  Estimated_Gross_Profit_Margin: string;
  Estimated_Monthly_Sales: string;
  Estimated_Net_Profit: string;
  Estimated_Net_Profit_Margin: string;
  Image_Link: string;
  Number_of_Reviews: string;
  Number_of_sellers_on_the_listing: string;
  Product_Image: string;
  Product_Name: string;
  Sales_Rank_30_days: string;
  Sales_Rank_90_days: string;
  Sourcing_Price: string;
  Sourcing_URL: string;

  constructor(
    ASIN: string,
    Amazon_FBA_estimated_fees: string,
    Amazon_Price: string,
    Amazon_URL: string,
    Amazon_on_Listing: string,
    Est_Sales_Rank: string,
    Estimated_Gross_Profit: string,
    Estimated_Gross_Profit_Margin: string,
    Estimated_Monthly_Sales: string,
    Estimated_Net_Profit: string,
    Estimated_Net_Profit_Margin: string,
    Image_Link: string,
    Number_of_Reviews: string,
    Number_of_sellers_on_the_listing: string,
    Product_Image: string,
    Product_Name: string,
    Sales_Rank_30_days: string,
    Sales_Rank_90_days: string,
    Sourcing_Price: string,
    Sourcing_URL: string
  ) {
    this.ASIN = ASIN;
    this.Amazon_FBA_estimated_fees = Amazon_FBA_estimated_fees;
    this.Amazon_Price = Amazon_Price;
    this.Amazon_URL = Amazon_URL;
    this.Amazon_on_Listing = Amazon_on_Listing;
    this.Est_Sales_Rank = Est_Sales_Rank;
    this.Estimated_Gross_Profit = Estimated_Gross_Profit;
    this.Estimated_Gross_Profit_Margin = Estimated_Gross_Profit_Margin;
    this.Estimated_Monthly_Sales = Estimated_Monthly_Sales;
    this.Estimated_Net_Profit = Estimated_Net_Profit;
    this.Estimated_Net_Profit_Margin = Estimated_Net_Profit_Margin;
    this.Image_Link = Image_Link;
    this.Number_of_Reviews = Number_of_Reviews;
    this.Number_of_sellers_on_the_listing = Number_of_sellers_on_the_listing;
    this.Product_Image = Product_Image;
    this.Product_Name = Product_Name;
    this.Sales_Rank_30_days = Sales_Rank_30_days;
    this.Sales_Rank_90_days = Sales_Rank_90_days;
    this.Sourcing_Price = Sourcing_Price;
    this.Sourcing_URL = Sourcing_URL;
  }
}
