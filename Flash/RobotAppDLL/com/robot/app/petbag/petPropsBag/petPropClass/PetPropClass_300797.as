package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300797
   {
       
      
      public function PetPropClass_300797(param1:PetPropInfo)
      {
         var _loc2_:PetInfo = null;
         var _loc3_:PetEffectInfo = null;
         var _loc4_:int = 0;
         var _loc5_:PetEffectInfo = null;
         var _loc6_:int = 0;
         super();
         if(param1.petInfo.id == 3211)
         {
            _loc2_ = param1.petInfo;
            _loc4_ = 0;
            while(_loc4_ < _loc2_.effectList.length)
            {
               if((_loc5_ = _loc2_.effectList[_loc4_] as PetEffectInfo).effectID != 177)
               {
                  if(_loc5_.status == 1)
                  {
                     _loc3_ = _loc5_;
                  }
               }
               _loc4_++;
            }
            if(_loc3_)
            {
               if((_loc6_ = int(PetEffectXMLInfo.getStarLevel(_loc3_.effectID,_loc3_.args))) >= 5)
               {
                  Alarm.show("该精灵的特性已经达到最高级!");
               }
               else
               {
                  SocketConnection.send(43603,param1.petInfo.catchTime,300797);
               }
            }
            else
            {
               Alarm.show("该精灵没有特性.");
            }
         }
         else
         {
            Alarm.show("此药剂只能给海瑟薇使用哦!");
         }
      }
   }
}
