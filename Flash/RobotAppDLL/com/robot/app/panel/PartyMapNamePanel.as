package com.robot.app.panel
{
   import com.robot.app.bag.BagClothPreview;
   import com.robot.core.CommandID;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.userHoldParty.PartyMapManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class PartyMapNamePanel
   {
      
      private static var _ui:MovieClip;
      
      private static var _expTipUI:MovieClip;
      
      private static var _specialExpStr:String = "";
       
      
      public function PartyMapNamePanel()
      {
         super();
      }
      
      public static function show() : void
      {
         if(_ui == null)
         {
            _ui = UIManager.getMovieClip("ui_PartyMapNamePanel");
            LevelManager.toolsLevel.addChild(_ui);
            DisplayUtil.align(_ui,null,AlignType.TOP_CENTER);
         }
         SocketConnection.addCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,function(param1:SocketEvent):void
         {
            var _loc11_:uint = 0;
            var _loc12_:uint = 0;
            SocketConnection.removeCmdListener(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:String = _loc3_.readUTFBytes(16);
            var _loc6_:uint = _loc3_.readUnsignedInt();
            (_ui["nickName"] as TextField).text = _loc5_;
            (_ui["partyName"] as TextField).text = _loc5_ + "的派对";
            (_ui["partyTime"] as TextField).text = String(PartyMapManager.curHour) + ":00-" + String(PartyMapManager.curHour + 1) + ":00";
            var _loc7_:Array = [];
            var _loc8_:uint = 0;
            while(_loc8_ < _loc6_)
            {
               _loc11_ = _loc3_.readUnsignedInt();
               _loc12_ = _loc3_.readUnsignedInt();
               _loc7_.push(new PeopleItemInfo(_loc11_,_loc12_));
               _loc8_++;
            }
            var _loc9_:Sprite = UIManager.getSprite("ComposeMC");
            _loc9_.scaleX = _loc9_.scaleY = 0.6;
            _loc9_.x = 2;
            _loc9_.y = -6;
            _loc9_.mouseEnabled = false;
            _loc9_.mouseChildren = false;
            DisplayUtil.stopAllMovieClip(_loc9_,1);
            DisplayUtil.removeAllChild(_ui["con"]);
            _ui["con"].addChild(_loc9_);
            var _loc10_:BagClothPreview;
            (_loc10_ = new BagClothPreview(_loc9_,null,ClothPreview.MODEL_SHOW)).showCloths(_loc7_);
         });
         SocketConnection.send(CommandID.USER_PARTY_GET_USER_IMAGE_NAME,PartyMapManager.masterID);
      }
      
      public static function hide() : void
      {
         if(_ui)
         {
            LevelManager.toolsLevel.removeChild(_ui);
            _ui = null;
         }
      }
   }
}
