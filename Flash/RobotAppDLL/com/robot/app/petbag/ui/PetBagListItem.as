package com.robot.app.petbag.ui
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.PetPropAddController;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.filters.ColorMatrixFilter;
   import flash.filters.GlowFilter;
   import flash.text.TextField;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetBagListItem extends Sprite
   {
       
      
      private var _info:PetInfo;
      
      private var _mainUI:Sprite;
      
      private var _nameTxt:TextField;
      
      private var _barTxt:TextField;
      
      private var _lvTxt:TextField;
      
      private var _markMc:Sprite;
      
      private var _bgMc:MovieClip;
      
      private var _barMc:Sprite;
      
      private var _showMc:MovieClip;
      
      private var _selectFrame:int = 1;
      
      private var _bgY:MovieClip;
      
      private var _bgB:MovieClip;
      
      private var isDefault:Boolean = false;
      
      private var _newMc:Sprite;
      
      private var _generIcon:MovieClip;
      
      public function PetBagListItem()
      {
         super();
         this._mainUI = UIManager.getSprite("PetListItemMc");
         this._nameTxt = this._mainUI["nameTxt"];
         this._barTxt = this._mainUI["barTxt"];
         this._lvTxt = this._mainUI["lvTxt"];
         this._markMc = this._mainUI["markMc"];
         this._barMc = this._mainUI["barMc"];
         this._mainUI["showMc"].visible = false;
         this._bgY = UIManager.getMovieClip("bgBtnY");
         this._bgB = UIManager.getMovieClip("bgBtnB");
         this._mainUI.addChildAt(this._bgY,0);
         this._mainUI.addChildAt(this._bgB,0);
         addChild(this._mainUI);
         mouseChildren = false;
         buttonMode = true;
         this._bgY.visible = false;
         this._bgMc = this._bgB;
         this._bgMc.gotoAndStop(this._selectFrame);
         this._lvTxt.parent.addChild(this._lvTxt);
         this._lvTxt.mouseEnabled = false;
         this.init();
      }
      
      public function showClear() : void
      {
         var icon:MovieClip = null;
         icon = UIManager.getMovieClip("Clear_MC");
         this.addChild(icon);
         icon.x = 50;
         icon.y = 35;
         icon.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(icon.currentFrame == icon.totalFrames)
            {
               icon.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               DisplayUtil.removeForParent(icon);
               icon = null;
            }
         });
      }
      
      public function get info() : PetInfo
      {
         return this._info;
      }
      
      public function set isSelect(param1:Boolean) : void
      {
         if(param1)
         {
            this._selectFrame = 2;
            this._bgMc.gotoAndStop(this._selectFrame);
            if(!this.isDefault)
            {
               this.filters = [new GlowFilter(16776960,1,15,15,2,1,true)];
            }
         }
         else
         {
            this._selectFrame = 1;
            this._bgMc.gotoAndStop(this._selectFrame);
            this.filters = [];
         }
      }
      
      public function get isSelect() : Boolean
      {
         return this._selectFrame == 2;
      }
      
      public function show(param1:PetInfo) : void
      {
         this._info = param1;
         if(this._info == null)
         {
            return;
         }
         this._nameTxt.visible = true;
         this._barTxt.visible = true;
         this._lvTxt.visible = true;
         this._markMc.visible = true;
         this._barMc.visible = true;
         this._nameTxt.text = PetXMLInfo.getName(this._info.id);
         var _loc2_:uint = this._info.hp > 0 ? uint(this._info.hp + PetPropAddController.getAllAddList(this._info)[5]) : uint(this._info.hp);
         var _loc3_:uint = this._info.maxHp + PetPropAddController.getAllAddList(this._info)[5];
         if(this._info.id == 70 && TasksManager.getTaskStatus(1241) == TasksManager.COMPLETE)
         {
            _loc3_ += 20;
            if(_loc2_ > 0)
            {
               _loc2_ += 20;
            }
         }
         this._barTxt.text = _loc2_ + "/" + _loc3_;
         this._markMc.width = _loc2_ / _loc3_ * this._barMc.width;
         this._lvTxt.text = "lv." + this._info.level;
         if(param1.generation > 0)
         {
            this.showGeneration();
         }
         if(this._showMc)
         {
            DisplayUtil.removeForParent(this._showMc);
            this._showMc = null;
         }
         ResourceManager.getResource(ClientConfig.getPetSwfPath(this._info.id,this._info.catchTime),this.onShowComplete,"pet");
         this.addEvent();
      }
      
      public function addNewIcon() : void
      {
         var _loc1_:uint = uint(SystemTimerManager.time);
         var _loc2_:Date = new Date(_loc1_ * 1000);
         var _loc3_:Date = new Date(this._info.catchTime * 1000);
         if(_loc2_.getFullYear() == _loc3_.getFullYear() && _loc2_.getMonth() == _loc3_.getMonth() && _loc2_.getDate() == _loc3_.getDate())
         {
            this.showNewIcon();
         }
         else if(this._newMc)
         {
            DisplayUtil.removeForParent(this._newMc);
            this._newMc = null;
         }
      }
      
      private function showGeneration() : void
      {
         if(!this._generIcon)
         {
            this._generIcon = UIManager.getMovieClip("GenerIcon_Mc");
         }
         this._generIcon.x = this._mainUI.width - this._generIcon.width + 2;
         this._generIcon.y = 7;
         this._mainUI.addChild(this._generIcon);
      }
      
      private function showNewIcon() : void
      {
         if(!this._newMc)
         {
            this._newMc = UIManager.getSprite("NewIcon_Mc");
         }
         this._newMc.x = this._mainUI.width - this._newMc.width + 2;
         this._newMc.y = 7;
         this._mainUI.addChild(this._newMc);
      }
      
      public function hide() : void
      {
         this._mainUI.filters = [];
         this.removeEvent();
         if(this._generIcon)
         {
            DisplayUtil.removeForParent(this._generIcon);
            this._generIcon = null;
         }
         if(this._newMc)
         {
            DisplayUtil.removeForParent(this._newMc);
            this._newMc = null;
         }
         this.init();
      }
      
      public function setDefault(param1:Boolean) : void
      {
         this.isDefault = param1;
         if(param1)
         {
            if(this._bgMc != this._bgY)
            {
               this._bgMc.visible = false;
               this._bgMc = this._bgY;
               this._bgMc.visible = true;
               this._bgMc.gotoAndStop(this._selectFrame);
            }
         }
         else if(this._bgMc != this._bgB)
         {
            this._bgMc.visible = false;
            this._bgMc = this._bgB;
            this._bgMc.visible = true;
            this._bgMc.gotoAndStop(this._selectFrame);
         }
      }
      
      private function init() : void
      {
         this._info = null;
         this.setDefault(false);
         this.isSelect = false;
         this._nameTxt.visible = false;
         this._barTxt.visible = false;
         this._lvTxt.visible = false;
         this._markMc.visible = false;
         this._barMc.visible = false;
         if(this._showMc)
         {
            DisplayUtil.removeForParent(this._showMc);
            this._showMc = null;
         }
      }
      
      public function setUnVisible() : void
      {
         var _loc1_:Array = [0.3086,0.6094,0.082,0,0,0.3086,0.6094,0.082,0,0,0.3086,0.6094,0.082,0,0,0,0,0,1,0];
         this._mainUI.filters = [new ColorMatrixFilter(_loc1_)];
      }
      
      private function addEvent() : void
      {
         addEventListener(MouseEvent.ROLL_OVER,this.onOver);
         addEventListener(MouseEvent.ROLL_OUT,this.onOut);
      }
      
      private function removeEvent() : void
      {
         removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
         removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         this._bgMc.gotoAndStop(this._selectFrame);
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         this._bgMc.gotoAndStop(this._selectFrame);
      }
      
      private function onShowComplete(param1:DisplayObject) : void
      {
         this._showMc = param1 as MovieClip;
         if(this._showMc)
         {
            DisplayUtil.stopAllMovieClip(this._showMc,1);
            this._showMc.scaleX = 0.8;
            this._showMc.scaleY = 0.8;
            this._showMc.x = 30;
            this._showMc.y = 50;
            addChild(this._showMc);
            addChild(this._nameTxt);
            addChild(this._lvTxt);
         }
         this.addNewIcon();
      }
   }
}
