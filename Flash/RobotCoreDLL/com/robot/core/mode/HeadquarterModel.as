package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.manager.HeadquarterManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.utils.Direction;
   import com.robot.core.utils.SolidDir;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.ui.Keyboard;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MovieClipUtil;
   import org.taomee.utils.Utils;
   
   public class HeadquarterModel extends SpriteModel
   {
       
      
      public var funID:uint;
      
      private var _info:FitmentInfo;
      
      private var _unit:com.robot.core.mode.IExtFun;
      
      private var _content:Sprite;
      
      private var _enabledDir:Boolean = true;
      
      private var _enabedStatus:Boolean = true;
      
      protected var _dragEnabled:Boolean;
      
      public function HeadquarterModel()
      {
         super();
      }
      
      public function get info() : FitmentInfo
      {
         return this._info;
      }
      
      public function get dragEnabled() : Boolean
      {
         return this._dragEnabled;
      }
      
      public function set dragEnabled(param1:Boolean) : void
      {
         this._dragEnabled = param1;
         if(this._dragEnabled)
         {
            if(this._enabledDir)
            {
               addEventListener(KeyboardEvent.KEY_DOWN,this.onKeyDown);
            }
         }
         else
         {
            removeEventListener(KeyboardEvent.KEY_DOWN,this.onKeyDown);
         }
      }
      
      public function get content() : Sprite
      {
         return this._content;
      }
      
      public function show(param1:FitmentInfo, param2:DisplayObjectContainer) : void
      {
         if(this._info)
         {
            ResourceManager.cancel(ClientConfig.getFitmentItem(this._info.id),this.onLoadRes);
         }
         this._info = param1;
         this._enabedStatus = !ItemXMLInfo.getDisabledStatus(this._info.id);
         this._enabledDir = !ItemXMLInfo.getDisabledDir(this._info.id);
         param2.addChild(this);
         x = this._info.pos.x;
         y = this._info.pos.y;
         direction = Direction.indexToStr(this._info.dir);
         if(this._unit)
         {
            this._unit.destory();
            this._unit = null;
         }
         if(this._content)
         {
            this._content.removeEventListener(Event.ADDED_TO_STAGE,this.onADDStage);
            this._content.removeEventListener(MouseEvent.CLICK,this.onStatusClick);
            DisplayUtil.removeForParent(this._content);
            this._content = null;
         }
         ResourceManager.getResource(ClientConfig.getFitmentItem(this._info.id),this.onLoadRes);
      }
      
      public function hide() : void
      {
         this.dragEnabled = false;
         DisplayUtil.removeForParent(this);
      }
      
      override public function destroy() : void
      {
         this.hide();
         super.destroy();
         if(this._info)
         {
            ResourceManager.cancel(ClientConfig.getFitmentItem(this._info.id),this.onLoadRes);
         }
         if(this._unit)
         {
            this._unit.destory();
            this._unit = null;
         }
         if(this._content)
         {
            this._content.removeEventListener(Event.ADDED_TO_STAGE,this.onADDStage);
            this._content.removeEventListener(MouseEvent.CLICK,this.onStatusClick);
            this._content = null;
         }
         this._info = null;
      }
      
      public function setSelect(param1:Boolean) : void
      {
         if(param1)
         {
            filters = [new GlowFilter(16711680)];
         }
         else
         {
            filters = [];
         }
      }
      
      private function changeDir() : void
      {
         if(this._content is MovieClip)
         {
            if(MovieClip(this._content).totalFrames == 1)
            {
               if(this._info.dir == SolidDir.DIR_LEFT)
               {
                  this._content.scaleX = 1;
               }
               else if(this._info.dir == SolidDir.DIR_RIGHT)
               {
                  this._content.scaleX = -1;
               }
            }
            else if(this._info.dir == SolidDir.DIR_LEFT)
            {
               MovieClip(this._content).gotoAndStop(1);
            }
            else if(this._info.dir == SolidDir.DIR_RIGHT)
            {
               MovieClip(this._content).gotoAndStop(2);
            }
            else if(this._info.dir == SolidDir.DIR_BUTTOM)
            {
               MovieClip(this._content).gotoAndStop(3);
            }
            else if(this._info.dir == SolidDir.DIR_TOP)
            {
               MovieClip(this._content).gotoAndStop(4);
            }
         }
         else if(this._info.dir == SolidDir.DIR_LEFT)
         {
            this._content.scaleX = 1;
         }
         else if(this._info.dir == SolidDir.DIR_RIGHT)
         {
            this._content.scaleX = -1;
         }
         MovieClipUtil.childStop(this._content,this._info.status + 1);
      }
      
      private function onLoadRes(param1:DisplayObject) : void
      {
         var _loc2_:Class = null;
         var _loc3_:Boolean = false;
         this._content = param1 as Sprite;
         this._content.addEventListener(Event.ADDED_TO_STAGE,this.onADDStage);
         addChild(this._content);
         this.funID = ItemXMLInfo.getFunID(this._info.id);
         if(this.funID != 0)
         {
            _loc3_ = ItemXMLInfo.getFunIsCom(this._info.id);
            if(_loc3_)
            {
               this._content.buttonMode = true;
               _loc2_ = Utils.getClass("com.robot.app.extFun.ExtFun_" + this.funID.toString());
               if(_loc2_)
               {
                  this._unit = new _loc2_() as com.robot.core.mode.IExtFun;
                  this._unit.setup(this._content,this._info);
               }
            }
            else if(MainManager.actorInfo.teamInfo.id == MainManager.actorInfo.mapID)
            {
               this._content.buttonMode = true;
               _loc2_ = Utils.getClass("com.robot.app.extFun.ExtFun_" + this.funID.toString());
               if(_loc2_)
               {
                  this._unit = new _loc2_() as com.robot.core.mode.IExtFun;
                  this._unit.setup(this._content,this._info);
               }
            }
            else
            {
               this._content.mouseEnabled = false;
               this._content.mouseChildren = false;
            }
         }
         else
         {
            this._content.mouseEnabled = false;
         }
         this.changeDir();
         if(this._enabedStatus)
         {
            this._content.addEventListener(MouseEvent.CLICK,this.onStatusClick);
         }
      }
      
      private function onADDStage(param1:Event) : void
      {
         this._content.removeEventListener(Event.ADDED_TO_STAGE,this.onADDStage);
         DepthManager.swapDepth(this,y);
      }
      
      private function onKeyDown(param1:KeyboardEvent) : void
      {
         var _loc2_:uint = 0;
         if(this._content)
         {
            if(param1.keyCode == Keyboard.LEFT)
            {
               _loc2_ = SolidDir.DIR_LEFT;
            }
            else if(param1.keyCode == Keyboard.RIGHT)
            {
               _loc2_ = SolidDir.DIR_RIGHT;
            }
            else if(param1.keyCode == Keyboard.DOWN)
            {
               if(this._content is MovieClip)
               {
                  if(MovieClip(this._content).totalFrames >= 3)
                  {
                     _loc2_ = SolidDir.DIR_BUTTOM;
                  }
               }
            }
            else if(param1.keyCode == Keyboard.UP)
            {
               if(this._content is MovieClip)
               {
                  if(MovieClip(this._content).totalFrames >= 4)
                  {
                     _loc2_ = SolidDir.DIR_TOP;
                  }
               }
            }
            if(_loc2_ != this._info.dir)
            {
               this._info.dir = _loc2_;
               this.changeDir();
               HeadquarterManager.isChange = true;
            }
         }
      }
      
      private function onStatusClick(param1:MouseEvent) : void
      {
         var _loc3_:MovieClip = null;
         var _loc2_:Sprite = param1.currentTarget as Sprite;
         if(_loc2_)
         {
            _loc3_ = _loc2_.getChildAt(0) as MovieClip;
            if(_loc3_)
            {
               if(_loc3_.totalFrames < 2)
               {
                  return;
               }
               if(_loc3_.currentFrame == 1)
               {
                  this._info.status = 1;
                  _loc3_.gotoAndStop(2);
               }
               else
               {
                  this._info.status = 0;
                  _loc3_.gotoAndStop(1);
               }
               if(MainManager.actorInfo.teamInfo.id == MainManager.actorInfo.mapID)
               {
                  if(MainManager.actorInfo.teamInfo.priv == 0)
                  {
                     HeadquarterManager.isChange = true;
                     HeadquarterManager.saveInfo();
                  }
               }
            }
         }
      }
   }
}
