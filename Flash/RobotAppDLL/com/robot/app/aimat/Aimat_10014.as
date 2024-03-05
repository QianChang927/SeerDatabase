package com.robot.app.aimat
{
   import com.robot.app.aimat.base.BaseLaserAimat;
   import flash.filters.GlowFilter;
   
   public class Aimat_10014 extends BaseLaserAimat
   {
       
      
      public function Aimat_10014()
      {
         super();
         laserColor = 16444291;
         laserFilter = new GlowFilter(laserColor);
         laserThickness = 3;
      }
   }
}
