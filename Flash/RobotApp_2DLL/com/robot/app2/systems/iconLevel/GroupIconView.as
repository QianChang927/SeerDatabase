package com.robot.app2.systems.iconLevel
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GroupIconView extends IconView
   {
       
      
      private var _subList:Array;
      
      private var _mainIconCon:MovieClip;
      
      private const BOX_WIDTH:int = 55;
      
      private const BOX_MARGIN:int = 8;
      
      private var _bg:Sprite;
      
      private var _delectList:Array;
      
      private var _iconui:MovieClip;
      
      public function GroupIconView(param1:String, param2:int, param3:String, param4:String, param5:String, param6:String, param7:String, param8:String = "", param9:String = "", param10:int = 0, param11:int = 0)
      {
         this._subList = [];
         this._delectList = [];
         super(param1,param2,param3,param4,param5,param6,param7,param8,param9,0,param11);
      }
      
      override protected function loadIcon(param1:int) : void
      {
         var isSubIcon:int = param1;
         _ui = new MovieClip();
         if(direction == TaskIconManager.LEFT_SIDE || direction == TaskIconManager.RIGHT_SIDE)
         {
            this._bg = UIManager.getMovieClip("SideIconBgUI");
         }
         else if(direction == TaskIconManager.LEFT || direction == TaskIconManager.RIGHT)
         {
            this._bg = UIManager.getMovieClip("IconBgUI");
         }
         this._mainIconCon = new MovieClip();
         _ui.addChild(this._bg);
         _ui.addChild(this._mainIconCon);
         ResourceManager.getResource(ClientConfig.getUiIcon(url),function(param1:MovieClip):void
         {
            _iconui = param1;
            if(_iconTxt != null && _iconTxt != "")
            {
               addIconText();
               addicontxtToui();
            }
            _mainIconCon.addChild(_iconui);
            _iconui.addEventListener(MouseEvent.ROLL_OVER,onRollOver);
            _ui.addEventListener(MouseEvent.ROLL_OUT,onRollOut);
            if(_addToIcon)
            {
               addToIconLevel();
            }
         },url);
      }
      
      override protected function addicontxtToui() : void
      {
         this._iconui.txtContainer.mouseEnabled = false;
         this._iconui.txtContainer.mouseChildren = false;
         this._iconui.txtContainer.addChild(textPic);
      }
      
      override public function addToIconLevel() : void
      {
         if(showNewseer == 0 && Boolean(NewSeerTaskController.isNewSeer) || !NewSeerTaskController.isNewSeer && showNewseer == 2)
         {
            return;
         }
         _addToIcon = true;
         if(this._iconui == null || !TaskIconManager.getIsInActivityTime(_time))
         {
            return;
         }
         this._iconui.cacheAsBitmap = true;
         this._iconui.buttonMode = true;
         if(DisplayUtil.hasParent(this.ui) == false)
         {
            if(tips != "")
            {
               ToolTipManager.add(this._mainIconCon,tips);
            }
            if(!this._mainIconCon.hasEventListener(MouseEvent.CLICK))
            {
               this._mainIconCon.addEventListener(MouseEvent.CLICK,onClick);
            }
            TaskIconManager.addIcon(this.ui,direction,priority,exMapList);
            if(initFunc != null && !_initFun)
            {
               _initFun = true;
               initFunc(this._iconui);
            }
            EventManager.dispatchEvent(new DynamicEvent("iconAdded",this));
         }
      }
      
      override public function get ui() : MovieClip
      {
         return _ui;
      }
      
      override public function set ui(param1:MovieClip) : void
      {
         this._iconui = param1;
         this._mainIconCon.addChild(param1);
      }
      
      public function addSubIcon(param1:IconView) : void
      {
         this._subList.push(param1);
         this._bg.width = (this.BOX_WIDTH + this.BOX_MARGIN) * (this._subList.length + 1);
         this._bg.visible = false;
      }
      
      override public function checkRed() : Boolean
      {
         var _loc1_:IconView = null;
         var _loc2_:Boolean = false;
         var _loc3_:int = 0;
         while(_loc3_ < this._subList.length)
         {
            _loc1_ = this._subList[_loc3_];
            if(_loc1_.checkRed())
            {
               _loc2_ = true;
            }
            _loc3_++;
         }
         if(redPointMc)
         {
            redPointMc.visible = _loc2_;
         }
         return _loc2_;
      }
      
      public function removeSubIcon(param1:String) : int
      {
         var _loc2_:IconView = null;
         var _loc3_:int = 0;
         while(_loc3_ < this._subList.length)
         {
            _loc2_ = this._subList[_loc3_];
            if(_loc2_.url == param1)
            {
               DisplayUtil.removeForParent(_loc2_.ui);
               this._subList.splice(_loc3_,1);
               this._delectList.push(_loc2_);
               return 1;
            }
            _loc3_++;
         }
         return 0;
      }
      
      public function addRemovedIcon(param1:String) : int
      {
         var _loc2_:IconView = null;
         var _loc3_:int = 0;
         while(_loc3_ < this._delectList.length)
         {
            _loc2_ = this._delectList[_loc3_];
            if(_loc2_.url == param1)
            {
               this._delectList.splice(_loc3_,1);
               this.addSubIcon(_loc2_);
               if(_loc2_.initFunc != null)
               {
                  _loc2_.initFunc(_loc2_.ui);
               }
               return 1;
            }
            _loc3_++;
         }
         return 0;
      }
      
      protected function onRollOver(param1:MouseEvent) : void
      {
         var _loc5_:IconView = null;
         DisplayUtil.removeForParent(this._bg);
         DisplayUtil.stopAllMovieClip(this.ui);
         var _loc2_:Number = 0;
         var _loc3_:int = 1;
         var _loc4_:int = 0;
         if(direction == TaskIconManager.RIGHT_SIDE || direction == TaskIconManager.RIGHT)
         {
            _loc3_ = -1;
         }
         _loc4_ = 0;
         while(_loc4_ < this._subList.length)
         {
            if((_loc5_ = this._subList[_loc4_]).ui == null)
            {
               break;
            }
            if(direction == TaskIconManager.RIGHT_SIDE || direction == TaskIconManager.LEFT_SIDE)
            {
               _loc2_ = _loc2_ + this.BOX_WIDTH * _loc3_ + this.BOX_MARGIN * _loc3_;
               _loc5_.ui.x = _loc2_;
            }
            else
            {
               _loc5_.ui.x = _loc2_;
               _loc2_ = _loc2_ + this.BOX_WIDTH * _loc3_ + this.BOX_MARGIN * _loc3_;
               _loc5_.ui.y = this.BOX_WIDTH;
            }
            _ui.addChild(_loc5_.ui);
            _loc4_++;
         }
         if(direction == TaskIconManager.LEFT || direction == TaskIconManager.RIGHT)
         {
            this._bg.width = this.BOX_WIDTH * this._subList.length + this.BOX_MARGIN * (this._subList.length - 1) + 6;
         }
         else
         {
            this._bg.width = this.BOX_WIDTH * (this._subList.length + 1) + this.BOX_MARGIN * this._subList.length + 6;
         }
         _ui.addChildAt(this._bg,0);
         this._bg.x = 0;
         this._bg.y = -4;
         if(direction == TaskIconManager.RIGHT_SIDE || direction == TaskIconManager.RIGHT)
         {
            this._bg.scaleX = -1 * this._bg.scaleX;
            this._bg.x = 55;
         }
         this._bg.visible = true;
      }
      
      protected function onRollOut(param1:MouseEvent) : void
      {
         var _loc3_:IconView = null;
         DisplayUtil.startAllMovieClip(this.ui);
         var _loc2_:int = 0;
         while(_loc2_ < this._subList.length)
         {
            _loc3_ = this._subList[_loc2_];
            DisplayUtil.stopAllMovieClip(_loc3_.ui);
            DisplayUtil.removeForParent(_loc3_.ui);
            _loc2_++;
         }
         this._bg.visible = false;
      }
      
      override public function removeFromIconLevel() : void
      {
         super.removeFromIconLevel();
         if(_ui != null && Boolean(DisplayUtil.hasParent(_ui)))
         {
            DisplayUtil.removeForParent(_ui);
         }
      }
   }
}
