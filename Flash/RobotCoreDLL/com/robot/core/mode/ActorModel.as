package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ActorModel extends BasePeoleModel
   {
       
      
      private var radius:Sprite;
      
      private var _alarmMC:MovieClip;
      
      private var _footMC:MovieClip;
      
      private var _mcTopIcon:MovieClip;
      
      private var _targ:Point;
      
      private var _fun:Function;
      
      public function ActorModel(param1:UserInfo)
      {
         this._footMC = UIManager.getMovieClip("q_mc");
         addChild(this._footMC);
         super(param1);
      }
      
      private function showTopIcon() : void
      {
         var ktool_cls:*;
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         ktool_cls = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         ktool_cls.getMultiValue([8457],function(param1:Array):void
         {
            var arr:Array = param1;
            var flag:int = int(BitUtils.getBit(arr[0],9));
            if(flag == 0)
            {
               ResourceManager.getResource(ClientConfig.getAppRes("small_monkey_reel"),function(param1:DisplayObject):void
               {
                  if(param1)
                  {
                     _mcTopIcon = param1 as MovieClip;
                     _mcTopIcon.scaleX = _mcTopIcon.scaleY = 0.8;
                     _topIconContainer.addChild(_mcTopIcon);
                     _mcTopIcon.buttonMode = true;
                     CommonUI.centerAlign(_mcTopIcon,_topIconContainer,new Point(0,0));
                     _mcTopIcon.addEventListener(MouseEvent.CLICK,onClickIconHandler);
                  }
               },"item");
            }
         });
      }
      
      public function get TopIcon() : Sprite
      {
         return _topIconContainer;
      }
      
      public function updateTopIcon() : void
      {
         var ktool_cls:* = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         ktool_cls.getMultiValue([8457],function(param1:Array):void
         {
            var _loc2_:int = int(BitUtils.getBit(param1[0],9));
            if(_mcTopIcon)
            {
               if(_loc2_ > 0)
               {
                  DisplayUtil.removeForParent(_mcTopIcon);
               }
               else
               {
                  _mcTopIcon.visible = true;
               }
            }
         });
      }
      
      public function hideTopIcon() : void
      {
         if(this._mcTopIcon)
         {
            this._mcTopIcon.visible = false;
         }
      }
      
      protected function onClickIconHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SmallMonkeyNewYearMessagePanel"),"正在打开...",null,1);
      }
      
      public function get alarmMC() : MovieClip
      {
         return this._alarmMC;
      }
      
      public function set alarmMC(param1:MovieClip) : void
      {
         this._alarmMC = param1;
      }
      
      public function get footMC() : MovieClip
      {
         return this._footMC;
      }
      
      public function showShotRadius(param1:uint) : void
      {
         if(this.radius == null)
         {
            this.radius = new Sprite();
            this.radius.mouseEnabled = false;
         }
         this.radius.graphics.clear();
         this.radius.graphics.lineStyle(2,16776960,0.6);
         this.radius.graphics.beginFill(16776960,0.2);
         this.radius.graphics.drawCircle(0,0,param1);
         addChildAt(this.radius,0);
      }
      
      public function hideRadius() : void
      {
         DisplayUtil.removeForParent(this.radius);
      }
      
      public function getIsPetFollw(param1:uint) : Boolean
      {
         if(pet)
         {
            if(pet.info.petID == param1)
            {
               return true;
            }
            return false;
         }
         return false;
      }
      
      public function moveAndAction(param1:Point, param2:Function) : void
      {
         if(param1 != null && param2 != null)
         {
            this._fun = param2;
            this._targ = param1;
            if(Point.distance(pos,this._targ) < 30)
            {
               this._fun();
            }
            else
            {
               walkAction(this._targ);
               addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
               MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
            }
         }
      }
      
      private function onWalkEnter(param1:Event) : void
      {
         if(Point.distance(pos,this._targ) < 30)
         {
            stop();
            this._fun();
            removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
            MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
         }
      }
      
      private function onMapClick(param1:MapEvent) : void
      {
         removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapClick);
      }
   }
}
