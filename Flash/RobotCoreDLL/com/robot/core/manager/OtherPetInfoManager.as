package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.info.pet.OtherPeoplePetInfo;
   import com.robot.core.net.SocketConnection;
   import flash.utils.IDataInput;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class OtherPetInfoManager
   {
      
      private static var _bagsMap:HashMap = new HashMap();
      
      private static var _fristMap:HashMap = new HashMap();
      
      private static var _secondBagMap:HashMap = new HashMap();
       
      
      public function OtherPetInfoManager()
      {
         super();
      }
      
      public static function getPetInfo(param1:uint, param2:Function, param3:int = 0) : void
      {
         var id:uint = param1;
         var event:Function = param2;
         var bagIndex:int = param3;
         if(id == 0)
         {
            event(null);
            return;
         }
         SocketConnection.sendByQueue(CommandID.GET_USERPERINFO_BY_ID,[id],function(param1:SocketEvent):void
         {
            var _loc6_:OtherPeoplePetInfo = null;
            var _loc2_:IDataInput = param1.data as IDataInput;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            _bagsMap.clear();
            _fristMap.clear();
            _secondBagMap.clear();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc6_ = new OtherPeoplePetInfo(_loc2_);
               _bagsMap.add(_loc6_.catchTime,_loc6_);
               if(_loc6_.useflag == 1 || _loc6_.useflag == 2)
               {
                  _fristMap.add(_loc6_.catchTime,_loc6_);
               }
               else if(_loc6_.useflag == 7)
               {
                  _secondBagMap.add(_loc6_.catchTime,_loc6_);
               }
               _loc5_++;
            }
            if(bagIndex == 0)
            {
               event(infos);
            }
            else if(bagIndex == 1)
            {
               event(fritsInfos);
            }
            else if(bagIndex == 2)
            {
               event(secondInfos);
            }
         });
      }
      
      public static function get infos() : Array
      {
         return _bagsMap.getValues().sortOn("catchTime");
      }
      
      public static function get fritsInfos() : Array
      {
         return _fristMap.getValues().sortOn("catchTime");
      }
      
      public static function get secondInfos() : Array
      {
         return _secondBagMap.getValues().sortOn("catchTime");
      }
   }
}
