package com.robot.app.achieve
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.info.AchieveTitleInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class AchieveTitlePanel extends Sprite
   {
       
      
      private var listContainer:MovieClip;
      
      private var mainMC:MovieClip;
      
      private var closeBtn:SimpleButton;
      
      private var panelData:AchieveTitleInfo;
      
      private var titleArr:Array;
      
      private var titleItemCls:Class;
      
      private var _marked:Boolean;
      
      private var parentPanel:DisplayObjectContainer;
      
      private var itemArr:Array;
      
      private var upBtn:SimpleButton;
      
      private var downBtn:SimpleButton;
      
      private var SCROLL_NUM:int;
      
      private var SHOW_NUM:uint = 9;
      
      private var CURRENT_NUM:uint = 0;
      
      public function AchieveTitlePanel()
      {
         super();
      }
      
      public function show(param1:AchieveTitleInfo, param2:DisplayObjectContainer) : void
      {
         if(AchieveTitlePanelController.getStatus == true)
         {
            this.close(null);
         }
         else
         {
            AchieveTitlePanelController.setStatus = true;
            this.panelData = param1;
            this.titleArr = this.panelData.titleArr;
            this.SCROLL_NUM = this.titleArr.length - this.SHOW_NUM + 1;
            this.parentPanel = param2;
            if(this.mainMC)
            {
               this.init();
            }
            else
            {
               this.loadUI();
            }
         }
      }
      
      private function loadUI() : void
      {
         var _loc1_:MCLoader = new MCLoader(ClientConfig.getResPath("module/achieve/titlepanel.swf"),LevelManager.appLevel,1,"正在打开称号面板");
         _loc1_.addEventListener(MCLoadEvent.SUCCESS,this.onLoadSuccess);
         _loc1_.doLoad();
      }
      
      private function onLoadSuccess(param1:MCLoadEvent) : void
      {
         var _loc2_:MCLoader = param1.currentTarget as MCLoader;
         _loc2_.removeEventListener(MCLoadEvent.SUCCESS,this.onLoadSuccess);
         var _loc3_:Class = param1.getApplicationDomain().getDefinition("MainPanel") as Class;
         this.titleItemCls = param1.getApplicationDomain().getDefinition("Item") as Class;
         this.mainMC = new _loc3_() as MovieClip;
         this.upBtn = this.mainMC["up_btn"];
         this.downBtn = this.mainMC["down_btn"];
         this.listContainer = this.mainMC["list_container"];
         _loc2_.clear();
         this.init();
      }
      
      private function init() : void
      {
         this.addChild(this.mainMC);
         this.parentPanel.addChild(this);
         this.x = 238;
         this.y = 81;
         this.initItem();
         if(this.SCROLL_NUM > 0)
         {
            this.upBtn.enabled = true;
            this.downBtn.enabled = true;
            this.upBtn.addEventListener(MouseEvent.CLICK,this.onUpClickHandler);
            this.downBtn.addEventListener(MouseEvent.CLICK,this.onDownClickHandler);
         }
         else
         {
            this.upBtn.enabled = false;
            this.downBtn.enabled = false;
         }
      }
      
      private function initItem() : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:String = null;
         var _loc4_:MovieClip = null;
         this.itemArr = new Array();
         DisplayUtil.removeAllChild(this.listContainer);
         var _loc1_:uint = 0;
         while(_loc1_ < this.titleArr.length)
         {
            _loc3_ = String(AchieveXMLInfo.getTitle(this.titleArr[_loc1_]));
            (_loc4_ = new this.titleItemCls() as MovieClip)["item_title"].text = _loc3_;
            _loc4_["item_title"].selectable = false;
            _loc4_.titleid = this.titleArr[_loc1_];
            if(MainManager.actorInfo.curTitle == this.titleArr[_loc1_])
            {
               _loc4_.isClicked = true;
               _loc4_["bg"].gotoAndStop(3);
            }
            else
            {
               _loc4_.isClicked = false;
               _loc4_["bg"].gotoAndStop(1);
            }
            _loc4_.x = 0;
            _loc4_.y = this.listContainer.numChildren * _loc4_.height;
            _loc4_.buttonMode = true;
            _loc4_.mouseChildren = true;
            _loc4_.addEventListener(MouseEvent.CLICK,this.onItemClickHandler);
            _loc4_.addEventListener(MouseEvent.ROLL_OVER,this.onOverHandler);
            _loc4_.addEventListener(MouseEvent.ROLL_OUT,this.onOutHandler);
            this.listContainer.addChild(_loc4_);
            this.itemArr.push(_loc4_);
            _loc1_++;
         }
         _loc2_ = new this.titleItemCls() as MovieClip;
         _loc2_["item_title"].text = "无称号";
         _loc2_["item_title"].selectable = false;
         _loc2_.titleid = 0;
         if(AchieveXMLInfo.getTitle(MainManager.actorInfo.curTitle) == "无称号")
         {
            _loc2_["bg"].gotoAndStop(3);
         }
         else
         {
            _loc2_["bg"].gotoAndStop(1);
         }
         _loc2_.y = this.listContainer.numChildren * _loc2_.height;
         this.listContainer.addChild(_loc2_);
         _loc2_.addEventListener(MouseEvent.CLICK,this.onItemClickHandler1);
         this.itemArr.push(_loc2_);
      }
      
      private function onOverHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(!_loc2_.isClicked)
         {
            _loc2_.gotoAndStop(2);
         }
      }
      
      private function onOutHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(!_loc2_.isClicked)
         {
            _loc2_.gotoAndStop(1);
         }
      }
      
      private function onItemClickHandler1(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:uint = uint(_loc2_.titleid);
         SocketConnection.addCmdListener(CommandID.SETTITLE,this.onSetTitleHandler);
         SocketConnection.send(CommandID.SETTITLE,_loc3_);
      }
      
      private function onItemClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:uint = uint(_loc2_.titleid);
         var _loc4_:uint = 0;
         while(_loc4_ < this.itemArr.length)
         {
            if(this.itemArr[_loc4_] != _loc2_)
            {
               if(this.itemArr[_loc4_].isClicked)
               {
                  this.itemArr[_loc4_].isClicked = false;
               }
            }
            _loc4_++;
         }
         DebugTrace.show(_loc2_.isClicked);
         if(!_loc2_.isClicked)
         {
            _loc2_.isClicked = true;
            _loc2_.gotoAndStop(3);
            SocketConnection.addCmdListener(CommandID.SETTITLE,this.onSetTitleHandler);
            SocketConnection.send(CommandID.SETTITLE,_loc3_);
         }
      }
      
      private function onSetTitleHandler(param1:SocketEvent) : void
      {
         var _loc4_:ByteArray = null;
         SocketConnection.removeCmdListener(CommandID.SETTITLE,this.onSetTitleHandler);
         if(param1.data)
         {
            _loc4_ = param1.data as ByteArray;
            MainManager.actorInfo.curTitle = _loc4_.readUnsignedInt();
            DebugTrace.show(MainManager.actorInfo.curTitle);
         }
         else
         {
            MainManager.actorInfo.curTitle = 0;
         }
         MainManager.actorModel.refreshTitle(MainManager.actorInfo.curTitle);
         var _loc2_:uint = uint(MainManager.actorInfo.curTitle);
         var _loc3_:String = String(AchieveXMLInfo.getTitle(_loc2_));
         this.parentPanel["choiceTitle"]["title"].text = _loc3_;
         this.close(null);
      }
      
      public function hide() : void
      {
         this.close(null);
      }
      
      private function onUpClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = null;
         if(this.CURRENT_NUM > 0)
         {
            --this.CURRENT_NUM;
            _loc2_ = this.itemArr[0];
            TweenLite.to(this.listContainer,0.5,{"y":-_loc2_.height * this.CURRENT_NUM + 35});
         }
      }
      
      private function onDownClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = null;
         if(this.CURRENT_NUM < this.SCROLL_NUM)
         {
            ++this.CURRENT_NUM;
            _loc2_ = this.itemArr[0];
            TweenLite.to(this.listContainer,0.5,{"y":-_loc2_.height * this.CURRENT_NUM + 35});
         }
      }
      
      private function close(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this);
         AchieveTitlePanelController.setStatus = false;
         this.upBtn.removeEventListener(MouseEvent.CLICK,this.onUpClickHandler);
         this.downBtn.removeEventListener(MouseEvent.CLICK,this.onDownClickHandler);
      }
   }
}
