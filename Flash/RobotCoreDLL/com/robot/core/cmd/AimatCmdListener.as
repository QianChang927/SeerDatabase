package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.AimatXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class AimatCmdListener extends BaseBean
   {
       
      
      public function AimatCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.AIMAT,this.onAimat);
         finish();
      }
      
      private function onAimat(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:Object;
         (_loc4_ = new Object()).itemID = _loc2_.readUnsignedInt();
         _loc4_.type = _loc2_.readUnsignedInt();
         _loc4_.pos = new Point(_loc2_.readUnsignedInt(),_loc2_.readUnsignedInt());
         if(_loc3_ == MainManager.actorID)
         {
            this.execAimat(_loc3_,_loc4_);
         }
         else if(UserManager.isShow)
         {
            this.execAimat(_loc3_,_loc4_);
         }
      }
      
      private function execAimat(param1:uint, param2:Object) : void
      {
         var _loc3_:BasePeoleModel = UserManager.getUserModel(param1);
         if(_loc3_)
         {
            if(param2.type > 10000)
            {
               if(AimatXMLInfo.getAimatID(_loc3_.info.clothIDs) == 0)
               {
                  return;
               }
            }
            _loc3_.aimatAction(param2.itemID,param2.type,param2.pos as Point,false);
         }
      }
   }
}
