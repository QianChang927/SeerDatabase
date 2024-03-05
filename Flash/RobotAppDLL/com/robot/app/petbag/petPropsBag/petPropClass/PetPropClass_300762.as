package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300762
   {
       
      
      public function PetPropClass_300762(param1:PetPropInfo)
      {
         var _loc3_:PetEffectInfo = null;
         var _loc5_:PetEffectInfo = null;
         var _loc6_:int = 0;
         super();
         var _loc2_:PetInfo = param1.petInfo;
         var _loc4_:int = 0;
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
               SocketConnection.send(43603,param1.petInfo.catchTime,300762);
            }
         }
         else
         {
            Alarm.show("该精灵没有特性.");
         }
      }
   }
}
