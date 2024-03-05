package com.robot.app2.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class YuekeController
   {
       
      
      public function YuekeController()
      {
         super();
      }
      
      private static function onGetBroadcast(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:String = _loc2_.readUTFBytes(16);
         var _loc4_:BroadcastInfo;
         (_loc4_ = new BroadcastInfo()).isLocal = true;
         _loc4_.module = "YuekeBuyPanel";
         _loc4_.txt = "元宵焰火大狂欢，" + TextFormatUtil.getRedTxt(_loc3_) + "成功找到了小约克，正在带着小约克放烟花呢！";
         BroadcastController.addBroadcast(_loc4_);
      }
      
      public static function playFirework(param1:uint, param2:BasePeoleModel) : void
      {
         var index:uint = param1;
         var model:BasePeoleModel = param2;
         ResourceManager.getResource(ClientConfig.getActiveUrl("yueke_firework_" + (index + 1)),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var obj:DisplayObject = param1;
            mc = obj as MovieClip;
            if(model && model.pet && (model.pet.info.petID == 1547 || model.pet.info.petID == 1548))
            {
               model.pet.addChild(mc);
               AnimateManager.playMcEndHandler(mc,function():void
               {
                  DisplayUtil.removeForParent(mc);
                  mc = null;
               });
            }
         },"firework");
      }
      
      public static function fireworkBroadcast() : void
      {
         SocketConnection.addCmdListener(CommandID.YUEKE_FIREWORK_BROADCAST,onBroadCast);
         SocketConnection.addCmdListener(CommandID.YUEKE_GET_BROADCAST,onGetBroadcast);
      }
      
      private static function onBroadCast(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:BasePeoleModel = UserManager.getUserModel(_loc3_);
         if(MainManager.actorID == _loc3_)
         {
            return;
         }
         if(_loc5_ && _loc5_.pet && (_loc5_.pet.info.petID == 1547 || _loc5_.pet.info.petID == 1548))
         {
            playFirework(_loc4_,_loc5_);
         }
      }
   }
}
