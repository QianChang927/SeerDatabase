package com.robot.app.aimat
{
   import com.robot.app.aimat.base.BaseLaserAimat;
   import flash.filters.GlowFilter;
   
   public class Aimat_10072 extends BaseLaserAimat
   {
       
      
      public function Aimat_10072()
      {
         super();
         laserColor = 13426175;
         laserFilter = new GlowFilter(39168,1,10,10,10);
         laserThickness = 3;
      }
   }
}
