import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import masalaDosa from "@/assets/masala-dosa.jpg";
import vegBiryani from "@/assets/veg-biryani.jpg";
import paneerManchurian from "@/assets/paneer-manchurian.jpg";
import indianBreads from "@/assets/indian-breads.jpg";

interface MenuItem {
  name: string;
  price: number;
  popular?: boolean;
}

const menuData = {
  breakfast: [
    { name: "Idli Sambar", price: 60 },
    { name: "Vada Sambar", price: 60 },
    { name: "Idli Vada", price: 60 },
    { name: "Puri Bhaji", price: 60 },
    { name: "Parota Bhaji", price: 60 },
    { name: "Chapati Bhaji", price: 60 },
    { name: "Rice Bath", price: 50 },
    { name: "Buns", price: 40 },
    { name: "Plain Dosa", price: 60 },
    { name: "Masala Dosa", price: 60, popular: true },
    { name: "Dahi Idli", price: 50 },
    { name: "Kali Dosa (2pcs)", price: 70 },
    { name: "Ghee Dosa (2pcs)", price: 70 },
    { name: "Set Dosa", price: 60 },
    { name: "Palak Masala Dosa", price: 75 },
    { name: "Mysore Masala Dosa", price: 80 },
    { name: "Mysore Plain Dosa", price: 60 },
    { name: "Onion Uthappam", price: 70 },
    { name: "Tomato Onion Uthappam", price: 70 },
  ],
  starters: [
    { name: "Gobi Manchurian", price: 130, popular: true },
    { name: "Palak Gobi Manchurian", price: 130 },
    { name: "Veg Crispy", price: 140 },
    { name: "Veg Manchurian Dig", price: 140 },
    { name: "Paneer Chilli Dry/Gravy", price: 170 },
    { name: "Paneer Hot Garlic Dig", price: 170 },
    { name: "Paneer Manchurian Dig", price: 170 },
    { name: "Paneer Pepper Dry/Gravy", price: 170 },
    { name: "Paneer 65", price: 170 },
    { name: "Paneer Papadi Roll", price: 170 },
    { name: "Mushroom Chilli Dig", price: 170 },
    { name: "Mushroom Hot Garlic Dig", price: 170 },
    { name: "Mushroom Paper D/G", price: 170 },
    { name: "Mush Manchurian D/G", price: 150 },
    { name: "Baby Corn Chilli", price: 150 },
    { name: "Baby Corn Manchurian", price: 125 },
  ],
  rice: [
    { name: "Veg Biryani", price: 140, popular: true },
    { name: "Paneer Tawa Biryani", price: 175 },
    { name: "Veg HYB Biryani", price: 165 },
    { name: "Paneer Biryani", price: 165 },
    { name: "Mushroom Biryani", price: 150 },
    { name: "Kaju Palav", price: 150 },
    { name: "Green Peace Palau", price: 130 },
    { name: "Veg Palav", price: 130 },
    { name: "Dal Kichidi", price: 120 },
    { name: "Royal Dal Kichidi", price: 140 },
    { name: "Jeera Rice", price: 100 },
    { name: "Lemon Rice", price: 120 },
    { name: "Masala Rice", price: 110 },
    { name: "Tomato Rice", price: 110 },
    { name: "Curd Rice Tadka", price: 110 },
    { name: "Ghee Rice", price: 140 },
    { name: "Chinese Palav", price: 140 },
    { name: "Steam Rice", price: 60 },
    { name: "Navaratna Spl B/R", price: 185 },
  ],
  punjabi: [
    { name: "Aloo Mutter", price: 130 },
    { name: "Channa Masala", price: 130 },
    { name: "Aloo Jeera", price: 130 },
    { name: "Veg Kurma", price: 130 },
    { name: "Aloo Gobi", price: 150 },
    { name: "Veg Kolhapuri", price: 140 },
    { name: "Veg Thava", price: 150 },
    { name: "Veg. Kadai", price: 160 },
    { name: "Paneer Mutter", price: 150 },
    { name: "Paneer Masala", price: 165 },
    { name: "Paneer Kolhapuri", price: 160 },
    { name: "Paneer Butter Masala", price: 165, popular: true },
    { name: "Paneer Burji", price: 165 },
    { name: "Paneer Tikka Masala", price: 165 },
    { name: "Palak Paneer", price: 165 },
    { name: "Mushroom Masala", price: 165 },
    { name: "Mushroom Kolhapuri", price: 165 },
    { name: "Mushroom Kadai", price: 165 },
    { name: "Baby Corn Masala", price: 165 },
    { name: "Kaju Masala", price: 160 },
    { name: "Kaju Paneer Kurma", price: 160 },
    { name: "Dal Fry", price: 110 },
    { name: "Dal Fry Tadka", price: 110 },
  ],
  breads: [
    { name: "Tandoori Roti", price: 15 },
    { name: "Tandoori Naan", price: 25 },
    { name: "Tandori Kulcha", price: 25 },
    { name: "Butter Roti", price: 20 },
    { name: "Butter Naan", price: 30 },
    { name: "Butter Kulcha", price: 30 },
    { name: "Chapati", price: 15 },
    { name: "Parota", price: 25 },
    { name: "Akki Rotti", price: 25 },
    { name: "Butter Garlic Naan", price: 35 },
    { name: "Garlic Kulcha", price: 35 },
    { name: "Cheese Garlic Naan", price: 40 },
    { name: "Butter Garlic Kulcha", price: 35 },
    { name: "Butter Garlic Roti", price: 25 },
    { name: "Garlic Roti", price: 20 },
    { name: "Aloo Parota", price: 70 },
    { name: "Paneer Parotta", price: 85 },
    { name: "Gobi Parotta", price: 70 },
  ],
};

const MenuSection = ({ items, image }: { items: MenuItem[]; image?: string }) => (
  <div className="grid md:grid-cols-2 gap-8">
    {image && (
      <div className="hidden md:block">
        <img
          src={image}
          alt="Menu item"
          className="w-full h-full object-cover rounded-lg shadow-card"
          loading="lazy"
        />
      </div>
    )}
    <div className={image ? "" : "md:col-span-2"}>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 rounded-lg bg-card shadow-card hover:shadow-elevated transition-shadow"
          >
            <div>
              <h4 className="font-semibold text-foreground">
                {item.name}
                {item.popular && (
                  <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </h4>
            </div>
            <p className="font-bold text-primary text-lg">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse selection of authentic vegetarian dishes prepared with love and traditional recipes
          </p>
        </div>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 bg-muted p-2 rounded-lg">
            <TabsTrigger value="breakfast" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Breakfast
            </TabsTrigger>
            <TabsTrigger value="starters" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Starters
            </TabsTrigger>
            <TabsTrigger value="rice" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Rice & Biryani
            </TabsTrigger>
            <TabsTrigger value="punjabi" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Main Course
            </TabsTrigger>
            <TabsTrigger value="breads" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Breads
            </TabsTrigger>
          </TabsList>

          <TabsContent value="breakfast">
            <MenuSection items={menuData.breakfast} image={masalaDosa} />
          </TabsContent>

          <TabsContent value="starters">
            <MenuSection items={menuData.starters} image={paneerManchurian} />
          </TabsContent>

          <TabsContent value="rice">
            <MenuSection items={menuData.rice} image={vegBiryani} />
          </TabsContent>

          <TabsContent value="punjabi">
            <MenuSection items={menuData.punjabi} />
          </TabsContent>

          <TabsContent value="breads">
            <MenuSection items={menuData.breads} image={indianBreads} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
