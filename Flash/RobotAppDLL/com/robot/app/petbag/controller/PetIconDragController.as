package com.robot.module.app.petBag.controller
{
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import com.robot.module.app.PetBag2017;
   import com.robot.module.app.petBag.BagModuleData;
   import com.robot.module.app.petBag.DataKeys;
   import com.robot.module.app.petBag.subModule.petList.PetListItemBaseView;
   import com.robot.module.app.petBag.subModule.petList.firstBag.FirstBagPetItemView;
   import com.robot.module.app.petBag.subModule.petList.secondBag.SecondBagPetItemView;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getQualifiedClassName;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class PetIconDragController
   {
       
      
      private var _eventMgr:EventListenerManager;
      
      private var _firstBagIcons:Array;
      
      private var _secondBagIcons:Array;
      
      private var _allIcons:Array;
      
      private var _startDragTime:Date;
      
      public var completeIntro:Function;
      
      private var _hitIcon:PetListItemBaseView;
      
      private var _dragIcon:Sprite;
      
      private var _targetIcon:PetListItemBaseView;
      
      private var _isStarDrag:Boolean = false;
      
      private var _startDragPoint:Point;
      
      private var effectTargetIcon:PetListItemBaseView;
      
      private var effectDragIcon:Sprite;
      
      private var mouseMc:MovieClip;
      
      public var isPlayingEff:Boolean;
      
      private var tmpindex1:int = -1;
      
      private var tmpindex2:int = -1;
      
      public function PetIconDragController(firstBagIcons:Array, secondBagIcons:Array)
      {
         var icon:DisplayObject = null;
         this._eventMgr = new EventListenerManager();
         super();
         this._firstBagIcons = firstBagIcons;
         this._secondBagIcons = secondBagIcons;
         this._allIcons = this._firstBagIcons.concat(this._secondBagIcons);
         for(var i:int = 0; i < this._allIcons.length; i++)
         {
            icon = this._allIcons[i];
            this._eventMgr.addEventListener(icon,MouseEvent.MOUSE_DOWN,this.startDrag);
         }
         this._eventMgr.addEventListener(MainManager.getStage() as InteractiveObject,MouseEvent.MOUSE_UP,this.stopDrag);
         this._eventMgr.addEventListener(MainManager.getStage(),MouseEvent.MOUSE_MOVE,this.onMouseMove);
      }
      
      private function startDrag(e:MouseEvent = null) : void
      {
         trace("startDrag");
         this.removeMoveEffectMovie();
         this._targetIcon = e.currentTarget as PetListItemBaseView;
         if(this._targetIcon.petInfo == null)
         {
            return;
         }
         this._isStarDrag = true;
         this._startDragTime = new Date();
         this._startDragPoint = new Point(e.stageX,e.stageY);
      }
      
      private function onMouseMove(e:MouseEvent = null) : void
      {
         var currentPoint:Point = null;
         var i:int = 0;
         var copyIcon:DisplayObject = null;
         var petIcon:PetListItemBaseView = null;
         var point0:Point = null;
         var point1:Point = null;
         var minDistance:Number = NaN;
         if(!this._isStarDrag)
         {
            return;
         }
         if(Boolean(this._dragIcon))
         {
            this._dragIcon.x = this._dragIcon.parent.mouseX;
            this._dragIcon.y = this._dragIcon.parent.mouseY;
         }
         else
         {
            currentPoint = new Point(e.stageX,e.stageY);
            if(Point.distance(currentPoint,this._startDragPoint) < 10)
            {
               return;
            }
            for(i = 0; i < this._allIcons.length; i++)
            {
            }
            copyIcon = DisplayUtil.copyDisplayAsBmp(this._targetIcon);
            copyIcon.scaleX = copyIcon.scaleY = 0.7;
            this._dragIcon = new Sprite();
            this._dragIcon.addChild(copyIcon);
            CommonUI.centerAlign(copyIcon,this._dragIcon,new Point(0,0));
            MainManager.getStage().addChild(this._dragIcon);
            this._dragIcon.x = this._dragIcon.parent.mouseX;
            this._dragIcon.y = this._dragIcon.parent.mouseY;
            this._dragIcon.alpha = 0.7;
         }
         this._hitIcon = null;
         for(var j:int = 0; j < this._allIcons.length; j++)
         {
            (this._allIcons[j] as PetListItemBaseView).ui.gotoAndStop(1);
         }
         for(j = 0; j < this._allIcons.length; j++)
         {
            petIcon = this._allIcons[j];
            point0 = new Point(e.stageX,e.stageY);
            point0 = petIcon.parent.globalToLocal(point0);
            point1 = new Point(petIcon.x,petIcon.y);
            minDistance = petIcon.width * 1.41 + 10;
            if(this._hitIcon == null && Point.distance(point0,point1) < minDistance && Boolean(petIcon.hitTestPoint(e.stageX,e.stageY,true)))
            {
               if(!(petIcon.petInfo == null && getQualifiedClassName(petIcon) == getQualifiedClassName(this._targetIcon)))
               {
                  if(!(petIcon is SecondBagPetItemView && !(petIcon as SecondBagPetItemView).isUnlock))
                  {
                     (this._allIcons[j] as PetListItemBaseView).ui.gotoAndStop(2);
                     if(this._allIcons[j].ui["petFirst_1"] != null)
                     {
                        this._allIcons[j].ui["petFirst_1"].visible = false;
                     }
                     if(this._allIcons[j].ui["petFirst_2"] != null)
                     {
                        this._allIcons[j].ui["petFirst_2"].visible = false;
                     }
                     this._hitIcon = this._allIcons[j];
                     break;
                  }
               }
            }
         }
      }
      
      public function playMoveEffectMovie(index1:int, index2:int, mouseMcO:MovieClip = null) : void
      {
         var i:int;
         var effectTargetIcon:DisplayObject;
         var point1:Point;
         var point2:Point;
         var tmpIcon:PetListItemBaseView = null;
         var tmpIcon1:PetListItemBaseView = null;
         this.removeMoveEffectMovie();
         this.tmpindex1 = index1;
         this.tmpindex2 = index2;
         for(i = 0; i < this._firstBagIcons.length; i++)
         {
            if(this._firstBagIcons[i].index == index1)
            {
               tmpIcon = this._firstBagIcons[i] as PetListItemBaseView;
            }
            else if(this._firstBagIcons[i].index == index2)
            {
               tmpIcon1 = this._firstBagIcons[i] as PetListItemBaseView;
            }
         }
         if(tmpIcon == null || tmpIcon1 == null)
         {
            return;
         }
         effectTargetIcon = DisplayUtil.copyDisplayAsBmp(tmpIcon);
         effectTargetIcon.scaleX = effectTargetIcon.scaleY = 0.7;
         this.effectDragIcon = new Sprite();
         this.effectDragIcon.addChild(effectTargetIcon);
         CommonUI.centerAlign(effectTargetIcon,this.effectDragIcon,new Point(0,0));
         MainManager.getStage().addChild(this.effectDragIcon);
         point1 = tmpIcon.localToGlobal(new Point(0,0));
         point2 = tmpIcon1.localToGlobal(new Point(0,0));
         this.effectDragIcon.x = point1.x;
         this.effectDragIcon.y = point1.y;
         if(Boolean(mouseMcO))
         {
            this.mouseMc = mouseMcO;
            this.effectDragIcon.addChild(this.mouseMc);
         }
         this.effectDragIcon.alpha = 0.7;
         TweenLite.to(this.effectDragIcon,1.5,{
            "x":point2.x,
            "y":point2.y,
            "onComplete":function():void
            {
               isPlayingEff = true;
               playMoveEffectMovie(index1,index2,mouseMcO);
            }
         });
      }
      
      public function removeMoveEffectMovie() : void
      {
         this.isPlayingEff = false;
         if(Boolean(this.mouseMc))
         {
            DisplayUtil.removeForParent(this.mouseMc);
         }
         if(Boolean(this.effectDragIcon))
         {
            TweenLite.killTweensOf(this.effectDragIcon);
            DisplayUtil.removeForParent(this.effectDragIcon);
            this.effectDragIcon = null;
         }
         LevelManager.openMouseEvent();
         if(Boolean(this.effectTargetIcon))
         {
            DisplayUtil.removeForParent(this.effectTargetIcon);
            this.effectTargetIcon = null;
         }
      }
      
      private function stopDrag(e:* = null) : void
      {
         if(!this._isStarDrag)
         {
            return;
         }
         for(var i:int = 0; i < this._allIcons.length; i++)
         {
            (this._allIcons[i] as DisplayObject).alpha = 1;
         }
         this.handleDrag();
         if(Boolean(this._dragIcon))
         {
            DisplayUtil.removeForParent(this._dragIcon);
            this._dragIcon = null;
         }
         this._hitIcon = null;
         this._isStarDrag = false;
         this._targetIcon = null;
      }
      
      private function handleDrag() : void
      {
         var focusInfo:PetInfo = null;
         var icon:DisplayObject = null;
         var point:Point = null;
         var index1:int = 0;
         var index2:int = 0;
         var tmparr:Array = null;
         var type:String = null;
         var hitPetInfo:PetInfo = null;
         var targetPetInfo:PetInfo = null;
         var firstBagPet:PetInfo = null;
         var secondBagPet:PetInfo = null;
         var deltaTime:int = new Date().time - this._startDragTime.time;
         if(deltaTime < 100 || this._hitIcon == null || this._hitIcon.petInfo == this._targetIcon.petInfo)
         {
            if(this.tmpindex1 != -1 && this.tmpindex2 != -1)
            {
               this.playMoveEffectMovie(this.tmpindex1,this.tmpindex2,this.mouseMc);
               return;
            }
            if(Boolean(NewSeerTaskController.isNewSeer) && this.tmpindex1 == -1 && this.tmpindex2 == -1)
            {
               return;
            }
            icon = this._dragIcon;
            point = this._targetIcon.parent.localToGlobal(new Point(this._targetIcon.x,this._targetIcon.y));
            this._dragIcon = null;
            DisplayUtil.removeForParent(icon);
            this._hitIcon = null;
            return;
         }
         if(this.completeIntro != null)
         {
            if(!(this._hitIcon.x > 400 && this._hitIcon.x < 480 && this._targetIcon.petInfo.catchTime == PetManager.defaultTime))
            {
               return;
            }
            this.completeIntro();
         }
         if(this._hitIcon.petInfo != null && getQualifiedClassName(this._targetIcon) == getQualifiedClassName(this._hitIcon))
         {
            index1 = this._targetIcon.index;
            index2 = this._hitIcon.index;
            tmparr = [this.tmpindex1,this.tmpindex2];
            if(this.tmpindex1 != -1 && this.tmpindex2 != -1 && !(index1 == this.tmpindex1 && index2 == this.tmpindex2))
            {
               this.playMoveEffectMovie(this.tmpindex1,this.tmpindex2,this.mouseMc);
               return;
            }
            if(Boolean(NewSeerTaskController.isNewSeer) && this.tmpindex1 == -1 && this.tmpindex2 == -1)
            {
               return;
            }
            type = this._targetIcon is FirstBagPetItemView ? DataKeys.FIRST_BAG_PETS : DataKeys.SECOND_BAG_PETS;
            hitPetInfo = this._hitIcon.petInfo;
            targetPetInfo = this._targetIcon.petInfo;
            if(hitPetInfo.catchTime != PetManager.defaultTime && targetPetInfo.catchTime != PetManager.defaultTime || PetManager.infos.length == 0)
            {
               PetManager.exchangePetPosition(hitPetInfo.catchTime,targetPetInfo.catchTime,1).then(function(e:SocketEvent):void
               {
                  var result:int = e.data as int;
                  if(result != 0)
                  {
                     Alarm2.show("操作失败！");
                  }
               });
               PetManager.upDateByOnce();
            }
            this.moduleData.swapPetIndex(this._hitIcon.petInfo,this._targetIcon.petInfo,type);
            this.moduleData.focusPet = this._hitIcon.petInfo;
         }
         else if(this._hitIcon.petInfo == null)
         {
            focusInfo = this._targetIcon.petInfo;
            if(this._targetIcon is FirstBagPetItemView)
            {
               if(NewSeerTaskController.isNewSeer)
               {
                  return;
               }
               this.startSwap();
               PetManager.bagToSecondBag(this._targetIcon.petInfo.catchTime).always(function():void
               {
                  endSwap();
                  moduleData.focusPet = focusInfo;
               });
            }
            else
            {
               this.startSwap();
               PetManager.secondBagToBag(this._targetIcon.petInfo.catchTime).always(function():void
               {
                  endSwap();
                  moduleData.focusPet = focusInfo;
               });
            }
         }
         else
         {
            if(Boolean(NewSeerTaskController.isNewSeer) || this._targetIcon.petInfo == null)
            {
               return;
            }
            firstBagPet = this._targetIcon is FirstBagPetItemView ? this._targetIcon.petInfo : this._hitIcon.petInfo;
            secondBagPet = this._targetIcon is FirstBagPetItemView ? this._hitIcon.petInfo : this._targetIcon.petInfo;
            this.moduleData.setPetTargetIndex(firstBagPet.catchTime,this.moduleData.secondBagInfos.indexOf(secondBagPet));
            this.moduleData.setPetTargetIndex(secondBagPet.catchTime,this.moduleData.firstBagInfos.indexOf(firstBagPet));
            this.startSwap();
            focusInfo = this._targetIcon.petInfo;
            trace("首发精灵为" + PetManager.defaultTime);
            if(firstBagPet.catchTime != PetManager.defaultTime)
            {
               PetManager.exchangePetPosition(firstBagPet.catchTime,secondBagPet.catchTime,1).then(function(e:SocketEvent):void
               {
                  var result:int = e.data as int;
                  if(result == 0)
                  {
                     endSwap();
                     moduleData.focusPet = focusInfo;
                  }
                  else
                  {
                     Alarm2.show("操作失败！");
                  }
               });
            }
            else
            {
               PetManager.setDefault(secondBagPet.catchTime).then(function():void
               {
                  endSwap();
                  moduleData.focusPet = focusInfo;
               });
            }
         }
      }
      
      public function firstPet(petA:PetInfo) : void
      {
         var firstBagPet:PetInfo = null;
         var temp:int = 0;
         if(petA.catchTime == PetManager.defaultTime && PetManager.infos.length > 0)
         {
            return;
         }
         if(this.moduleData.firstBagInfos.indexOf(petA) != -1)
         {
            this.moduleData.swapPetIndex(PetManager.getPetInfo(PetManager.defaultTime),petA);
            this.moduleData.focusPet = petA;
         }
         else if(this.moduleData.secondBagInfos.indexOf(petA) != -1)
         {
            firstBagPet = PetManager.getPetInfo(PetManager.defaultTime);
            temp = this.moduleData.firstBagInfos.indexOf(firstBagPet);
            if(temp != -1)
            {
               this.moduleData.setPetTargetIndex(PetManager.defaultTime,this.moduleData.secondBagInfos.indexOf(petA));
               this.moduleData.setPetTargetIndex(petA.catchTime,temp);
               this.startSwap();
               PetManager.setDefault(petA.catchTime).then(function():void
               {
                  endSwap();
                  moduleData.focusPet = petA;
               });
            }
            else
            {
               this.startSwap();
               PetManager.secondBagToBag(petA.catchTime).always(function():void
               {
                  endSwap();
                  moduleData.focusPet = petA;
               });
            }
         }
      }
      
      private function get moduleData() : BagModuleData
      {
         return PetBag2017.instance.moduleData;
      }
      
      private function startSwap() : void
      {
         for(var i:int = 0; i < this._allIcons.length; i++)
         {
            this._allIcons[i].mouseChildren = this._allIcons[i].mouseEnabled = false;
            (this._allIcons[i] as PetListItemBaseView).startSwap();
         }
      }
      
      private function endSwap() : void
      {
         for(var i:int = 0; i < this._allIcons.length; i++)
         {
            this._allIcons[i].mouseChildren = this._allIcons[i].mouseEnabled = true;
            (this._allIcons[i] as PetListItemBaseView).endSwap();
         }
         PetManager.upDateByOnce();
      }
      
      public function destory() : void
      {
         this._eventMgr.removeEventListener(MainManager.getStage() as InteractiveObject,MouseEvent.MOUSE_UP,this.stopDrag);
         this._eventMgr.removeEventListener(MainManager.getStage(),MouseEvent.MOUSE_MOVE,this.onMouseMove);
         this.tmpindex1 = this.tmpindex2 = -1;
         this.removeMoveEffectMovie();
         this.mouseMc = null;
         if(Boolean(this._eventMgr))
         {
            this._eventMgr.clear();
            this._eventMgr = null;
         }
         if(Boolean(this._dragIcon))
         {
            DisplayUtil.removeForParent(this._dragIcon);
            this._dragIcon = null;
         }
         this._hitIcon = null;
         this._targetIcon = null;
         this._startDragTime = null;
         this._firstBagIcons = null;
         this._secondBagIcons = null;
         this._allIcons = null;
         this._startDragPoint = null;
      }
   }
}
