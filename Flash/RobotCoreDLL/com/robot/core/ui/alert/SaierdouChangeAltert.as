package com.robot.core.ui.alert
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class SaierdouChangeAltert
   {
      
      public static const SAIERDOU_CHANGE:String = "saierdouChange";
      
      private static var _isShow:Boolean = true;
      
      private static var _msgList:Array = [];
      
      private static var _needDalay:Boolean = false;
       
      
      public function SaierdouChangeAltert()
      {
         super();
      }
      
      public static function addListener() : void
      {
         SocketConnection.addCmdListener(CommandID.CHANGE_SAIERDOU,_changeHandler);
      }
      
      private static function _changeHandler(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:Number = _loc2_.readUnsignedInt();
         var _loc4_:Number = Math.abs(MainManager.actorInfo.coins - _loc3_);
         EventManager.dispatchEvent(new DynamicEvent(SaierdouChangeAltert.SAIERDOU_CHANGE,_loc3_ - MainManager.actorInfo.coins));
         if(!_isShow)
         {
            MainManager.actorInfo.coins = _loc3_;
            return;
         }
         if(MainManager.actorInfo.coins < _loc3_)
         {
            _msgList.push(_loc4_);
            showDialog();
         }
         else if(MainManager.actorInfo.coins > _loc3_)
         {
         }
         MainManager.actorInfo.coins = _loc3_;
      }
      
      private static function showDialog() : void
      {
         var _loc1_:int = 0;
         if(!_needDalay)
         {
            if(_msgList.length > 0)
            {
               _loc1_ = _msgList.shift();
               ItemInBagAlert.show(1,_loc1_ + "个" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了你的储存箱！",showDialog);
            }
         }
      }
      
      public static function dalayShowCoinDialog() : void
      {
         _needDalay = true;
      }
      
      public static function showCoinDialog() : void
      {
         _needDalay = false;
         showDialog();
      }
      
      public static function setShowOrHide(param1:Boolean) : void
      {
         _isShow = param1;
      }
   }
}
