package com.robot.core.battleRoyale
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class GameOverPanel
   {
      
      private static const TOP_MARGIN:uint = 97;
      
      private static const LEFT_MARGIN:uint = 73;
      
      private static const PADDING:uint = 37;
       
      
      private var _mc:MovieClip;
      
      private var _closeBtn:SimpleButton;
      
      private var _itemClass:Class;
      
      public function GameOverPanel(param1:MovieClip, param2:Class)
      {
         var mc:MovieClip = param1;
         var itemClass:Class = param2;
         super();
         this._mc = mc;
         this._itemClass = itemClass;
         this._closeBtn = mc["closeBtn"];
         this._closeBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
         {
            DisplayUtil.removeForParent(_mc);
            LevelManager.openMouseEvent();
            _closeBtn.removeEventListener(MouseEvent.CLICK,arguments.callee);
            BattleRoyaleManager.stutas = BattleRoyaleManager.ROOM_TO_ONLINE;
            MapManager.changeMap(BattleRoyaleManager.oldMapID);
         });
      }
      
      public function show(param1:ByteArray) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:String = null;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         var _loc9_:uint = 0;
         var _loc10_:Array = null;
         var _loc12_:MovieClip = null;
         var _loc2_:uint = param1.readUnsignedInt();
         var _loc3_:uint = param1.readUnsignedInt();
         _loc10_ = new Array();
         var _loc11_:int = 0;
         while(_loc11_ < _loc3_)
         {
            _loc4_ = param1.readUnsignedInt();
            _loc5_ = param1.readUTFBytes(16);
            _loc6_ = param1.readUnsignedInt();
            _loc7_ = param1.readUnsignedInt();
            _loc8_ = param1.readUnsignedInt();
            _loc9_ = param1.readUnsignedInt();
            _loc10_.push({
               "id":_loc4_,
               "nick":_loc5_,
               "killNum":_loc7_,
               "medalNum":_loc8_,
               "expNum":_loc9_
            });
            _loc11_++;
         }
         _loc10_.sortOn("killNum",Array.NUMERIC | Array.DESCENDING);
         _loc11_ = 0;
         while(_loc11_ < _loc3_)
         {
            (_loc12_ = new this._itemClass() as MovieClip)["nick"].text = String(_loc10_[_loc11_].nick);
            _loc12_["killNum"].text = String(_loc10_[_loc11_].killNum);
            _loc12_["medalNum"].text = String(_loc10_[_loc11_].medalNum);
            _loc12_["exp"].text = String(_loc10_[_loc11_].expNum);
            _loc12_.x = LEFT_MARGIN;
            _loc12_.y = TOP_MARGIN + PADDING * _loc11_;
            this._mc.addChild(_loc12_);
            if(_loc10_[_loc11_].id == MainManager.actorID)
            {
               MainManager.actorInfo.fightRoyale += _loc10_[_loc11_].medalNum;
            }
            _loc11_++;
         }
         LevelManager.closeMouseEvent();
         DisplayUtil.align(this._mc,null,AlignType.MIDDLE_CENTER);
         LevelManager.topLevel.addChild(this._mc);
      }
   }
}
