package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.pet.PetInfoController;
   import com.robot.core.ui.DialogBox;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.utils.getTimer;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MovieClipUtil;
   
   public class PetModel extends com.robot.core.mode.ActionSpriteModel
   {
      
      public static const MAX:int = 60;
       
      
      private var _people:com.robot.core.mode.ActionSpriteModel;
      
      private var _info:PetShowInfo;
      
      private var _petId:uint;
      
      private var _petMc:MovieClip;
      
      private var _mateId:uint;
      
      private var _mateMc:MovieClip;
      
      public var lockClickEvent:Boolean;
      
      private var _petLight:MovieClip;
      
      private var _mateLight:MovieClip;
      
      private var _petDump:MovieClip;
      
      private var _mateDump:MovieClip;
      
      private var _abilityLight:MovieClip;
      
      private var _otherAbilityLight:MovieClip;
      
      private var _loveMc:MovieClip;
      
      private var _startTime:uint;
      
      private var _endTime:uint;
      
      public function PetModel(param1:com.robot.core.mode.ActionSpriteModel)
      {
         super();
         buttonMode = true;
         _speed = 3;
         this._people = param1;
         PetManager.addEventListener(PetEvent.EQUIP_SKIN,this.onEquipSkin);
      }
      
      public function get info() : PetShowInfo
      {
         return this._info;
      }
      
      override public function set direction(param1:String) : void
      {
         if(param1 == null || param1 == "")
         {
            return;
         }
         if(this._petMc)
         {
            this._petMc.gotoAndStop(param1);
         }
         if(this._mateMc)
         {
            this._mateMc.gotoAndStop(param1);
         }
      }
      
      override public function get centerPoint() : Point
      {
         _centerPoint.x = x;
         _centerPoint.y = y - 10;
         return _centerPoint;
      }
      
      public function bright() : void
      {
         this.removeBright();
         if(this._info.otherBright && Boolean(this._mateMc))
         {
            this._mateLight = UIManager.getMovieClip("PetBright_MC");
            this._mateMc.addChildAt(this._mateLight,0);
         }
         if(this._info.petID == 2166 || this._info.petID == 2167 || this._info.petID == 1526 || this._info.petID == 1527 || this._info.petID == 1731 || this._info.petID == 1732 || this._info.petID == 1864 || this._info.petID == 1865)
         {
            this._petLight = UIManager.getMovieClip("PetWalkGuangHuan");
            this._petMc.addChildAt(this._petLight,0);
         }
         else if(this._info.isBright && Boolean(this._petMc))
         {
            if(this._petLight)
            {
               DisplayUtil.removeForParent(this._petLight);
               this._petLight = null;
            }
            this._petLight = UIManager.getMovieClip("PetBright_MC");
            this._petMc.addChildAt(this._petLight,0);
         }
      }
      
      public function removeBright() : void
      {
         if(this._petLight)
         {
            DisplayUtil.removeForParent(this._petLight);
            this._petLight = null;
         }
         if(this._mateLight)
         {
            DisplayUtil.removeForParent(this._mateLight);
            this._mateLight = null;
         }
      }
      
      private function onEquipSkin(param1:PetEvent) : void
      {
         if(this._info == null || this._info.userID != MainManager.actorID)
         {
            return;
         }
         if(this._info != null && param1.catchTime() == this._info.catchTime)
         {
            this._info.skinId = PetManager.getPetInfo(this._info.catchTime).skinId;
            this.show(this._info);
         }
      }
      
      public function showDumpLight(param1:Boolean, param2:Boolean = false) : void
      {
         this.hideDumpLight();
         if(param1 && Boolean(this._petMc))
         {
            this._petDump = UIManager.getMovieClip("PetEat_Mc");
            this._petDump.play();
            this._petDump.x = -2;
            this._petDump.scaleX = this._petDump.scaleY = 1.4;
            this._petMc.addChild(this._petDump);
         }
         if(param2 && Boolean(this._mateMc))
         {
            this._mateDump = UIManager.getMovieClip("PetEat_Mc");
            this._mateDump.play();
            this._mateDump.x = -2;
            this._mateDump.scaleX = this._mateDump.scaleY = 1.4;
            this._mateMc.addChild(this._mateDump);
         }
      }
      
      public function hideDumpLight() : void
      {
         if(this._petDump)
         {
            DisplayUtil.removeForParent(this._petDump);
            this._petDump = null;
         }
         if(this._mateDump)
         {
            DisplayUtil.removeForParent(this._mateDump);
            this._mateDump = null;
         }
      }
      
      public function showAbilityLight() : void
      {
         if(this._abilityLight)
         {
            DisplayUtil.removeForParent(this._abilityLight);
            this._abilityLight = null;
         }
         if(this._otherAbilityLight)
         {
            DisplayUtil.removeForParent(this._otherAbilityLight);
            this._otherAbilityLight = null;
         }
         switch(this._info.abilityType)
         {
            case 10:
               this._abilityLight = UIManager.getMovieClip("RedAbilityPetBright");
               break;
            case 20:
               this._abilityLight = UIManager.getMovieClip("BlueAbilityPetBright");
               break;
            case 32:
               this._abilityLight = UIManager.getMovieClip("YellowAbilityPetBright");
         }
         switch(this._info.otherAbilityType)
         {
            case 10:
               this._otherAbilityLight = UIManager.getMovieClip("RedAbilityPetBright");
               break;
            case 20:
               this._otherAbilityLight = UIManager.getMovieClip("BlueAbilityPetBright");
               break;
            case 32:
               this._otherAbilityLight = UIManager.getMovieClip("YellowAbilityPetBright");
         }
         if(Boolean(this._abilityLight) && Boolean(this._petMc))
         {
            this._petMc.addChild(this._abilityLight);
         }
         if(Boolean(this._otherAbilityLight) && Boolean(this._mateMc))
         {
            this._mateMc.addChild(this._otherAbilityLight);
         }
      }
      
      public function showFace(param1:String) : void
      {
         var _loc2_:DialogBox = null;
         if(this._petMc)
         {
            _loc2_ = new DialogBox();
            _loc2_.boxBgMC.visible = false;
            _loc2_.boxArrowMC.visible = false;
            _loc2_.show(param1,18,-24,this._petMc);
         }
      }
      
      override public function get hitRect() : Rectangle
      {
         _hitRect.x = x - width / 2;
         _hitRect.y = y - height;
         _hitRect.width = width;
         _hitRect.height = height;
         return _hitRect;
      }
      
      public function show(param1:PetShowInfo) : void
      {
         if(this._people == null)
         {
            return;
         }
         this.hide();
         this._info = param1;
         this._petId = this._info.petID;
         this._mateId = this._info.otherPetId;
         x = this._people.x + 40;
         y = this._people.y + 5;
         if(Boolean(MapManager.currentMap) && Boolean(MapManager.currentMap.depthLevel))
         {
            MapManager.currentMap.depthLevel.addChild(this);
         }
         if(this._info.userID == MainManager.actorID)
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(this._petId,this._info.catchTime,this._info.skinId),this.onLoad,"pet");
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(this._petId,0,this._info.skinId),this.onLoad,"pet");
         }
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         this._petMc = param1 as MovieClip;
         if(this._mateId == 0)
         {
            this.initPet();
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(this._mateId),this.onMateLoad,"pet");
         }
      }
      
      private function onMateLoad(param1:DisplayObject) : void
      {
         this._mateMc = param1 as MovieClip;
         this.initPet();
      }
      
      private function initPet() : void
      {
         if(this._people == null)
         {
            return;
         }
         this.direction = this._people.direction;
         if(this._petMc)
         {
            MovieClipUtil.childStop(this._petMc,1);
            addChild(this._petMc);
         }
         if(this._mateMc)
         {
            MovieClipUtil.childStop(this._mateMc,1);
            this._mateMc.x = 30;
            addChild(this._mateMc);
         }
         this.bright();
         this.showDumpLight(this._info.isEatBrigh,this._info.otherEatBright);
         this.showAbilityLight();
         if(_walk.isPlaying)
         {
            this.onWalkStart(null);
         }
         this.addEvent();
         if(this.info.userID == MainManager.actorID)
         {
            this.addEventListener(MouseEvent.MOUSE_OVER,function():void
            {
               if(_petMc)
               {
                  MovieClipUtil.childPlay(_petMc,1);
               }
               if(_mateMc)
               {
                  MovieClipUtil.childPlay(_mateMc,1);
               }
            });
            this.addEventListener(MouseEvent.MOUSE_OUT,function():void
            {
               if(_petMc)
               {
                  MovieClipUtil.childStop(_petMc,1);
               }
               if(_mateMc)
               {
                  MovieClipUtil.childStop(_mateMc,1);
               }
            });
         }
      }
      
      private function playLove() : void
      {
         this._loveMc = UIManager.getMovieClip("Love_Mc");
         this._loveMc.addEventListener(Event.ENTER_FRAME,this.onLoveEnterHandler);
         this._petMc.addChild(this._loveMc);
      }
      
      private function onLoveEnterHandler(param1:Event) : void
      {
         if(this._loveMc.currentFrame == this._loveMc.totalFrames)
         {
            this.endLove();
         }
      }
      
      public function endLove() : void
      {
         if(this._loveMc)
         {
            DisplayUtil.removeForParent(this._loveMc);
            this._loveMc.removeEventListener(Event.ENTER_FRAME,this.onLoveEnterHandler);
            this._loveMc = null;
         }
      }
      
      public function hide() : void
      {
         this.endLove();
         this.removeEvent();
         if(this._petMc)
         {
            DisplayUtil.removeForParent(this._petMc);
            this._petMc = null;
         }
         if(this._mateMc)
         {
            DisplayUtil.removeForParent(this._mateMc);
            this._mateMc = null;
         }
         if(this._petId != 0)
         {
            if(this._info.userID == MainManager.actorID)
            {
               ResourceManager.cancelURL(ClientConfig.getPetSwfPath(this._petId,this._info.catchTime));
            }
            else
            {
               ResourceManager.cancelURL(ClientConfig.getPetSwfPath(this._petId));
            }
         }
         if(this._mateId != 0)
         {
            ResourceManager.cancelURL(ClientConfig.getPetSwfPath(this._mateId));
         }
         DisplayUtil.removeForParent(this);
      }
      
      public function walkAction(param1:Object) : void
      {
         if(this._people == null)
         {
            return;
         }
         _walk.execute(this,param1,false);
      }
      
      override public function destroy() : void
      {
         super.destroy();
         PetManager.removeEventListener(PetEvent.EQUIP_SKIN,this.onEquipSkin);
         this.hide();
         this._people = null;
         this._petMc = null;
         this._mateMc = null;
      }
      
      private function addEvent() : void
      {
         if(this.lockClickEvent == false)
         {
            addEventListener(MouseEvent.CLICK,this.onPetClickHandler);
         }
         addEventListener(RobotEvent.WALK_START,this.onWalkStart);
         addEventListener(RobotEvent.WALK_END,this.onWalkOver);
         addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnterFrame);
         if(this._people.walk.isPlaying)
         {
            this._people.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         }
         this._people.addEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
         if(this._info.isBright)
         {
            ToolTipManager.add(this,"31个体炫光精灵");
         }
      }
      
      private function removeEvent() : void
      {
         removeEventListener(MouseEvent.CLICK,this.onPetClickHandler);
         removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
         removeEventListener(RobotEvent.WALK_END,this.onWalkOver);
         removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnterFrame);
         this._people.removeEventListener(RobotEvent.WALK_START,this.onPeopleWalkStart);
         this._people.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         this._people.removeEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
         ToolTipManager.remove(this);
      }
      
      private function onWalkStart(param1:Event) : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:MovieClip = null;
         if(this._petMc)
         {
            _loc2_ = this._petMc.getChildAt(0) as MovieClip;
            if(_loc2_)
            {
               if(_loc2_.currentFrame == 1)
               {
                  _loc2_.gotoAndPlay(2);
               }
            }
         }
         if(this._mateMc)
         {
            _loc3_ = this._mateMc.getChildAt(0) as MovieClip;
            if(_loc3_)
            {
               if(_loc3_.currentFrame == 1)
               {
                  _loc3_.gotoAndPlay(2);
               }
            }
         }
         this.endLove();
      }
      
      private function onWalkEnterFrame(param1:Event) : void
      {
         if(Point.distance(pos,_walk.endP) < MAX)
         {
            stop();
         }
      }
      
      private function onWalkOver(param1:Event) : void
      {
         if(this._petMc)
         {
            MovieClipUtil.childStop(this._petMc,1);
         }
         if(this._mateMc)
         {
            MovieClipUtil.childStop(this._mateMc,1);
         }
         if(Boolean(this._petMc) && Boolean(this._mateMc))
         {
            this._endTime = getTimer();
            if(this._endTime - this._startTime >= 4000)
            {
               this._startTime = getTimer();
               this.playLove();
            }
         }
      }
      
      private function onPetClickHandler(param1:MouseEvent) : void
      {
         if(this._info.userID == 0 && this._petId == 2818)
         {
            ModuleManager.showAppModule("RenaultAllGetPanel");
            return;
         }
         if(this._info.userID == MainManager.actorID && (this._petId == 1547 || this._petId == 1548))
         {
            SocketConnection.send(1022,86055502);
            ModuleManager.showModule(ClientConfig.getAppModule("YuekeFollowPanel"));
         }
         else
         {
            PetInfoController.getInfo(false,this._info.userID,this._info.catchTime);
         }
      }
      
      private function onPeopleWalkStart(param1:Event) : void
      {
         this._people.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
         this._people.addEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
      }
      
      private function onPeopleWalkEnter(param1:Event) : void
      {
         this.petWalk(false);
      }
      
      private function onPeopleWalkEnd(param1:Event) : void
      {
         this.petWalk(true);
         this._people.removeEventListener(RobotEvent.WALK_END,this.onPeopleWalkEnd);
      }
      
      private function petWalk(param1:Boolean = false) : void
      {
         var _loc2_:Array = null;
         if(Point.distance(pos,this._people.pos) > MAX)
         {
            if(Point.distance(pos,this._people.walk.endP) > Point.distance(this._people.pos,this._people.walk.endP))
            {
               _loc2_ = this._people.walk.remData;
               _loc2_.unshift(this._people.pos);
               _loc2_.unshift(pos);
               if(param1)
               {
                  this.walkAction(this._people.pos);
               }
               else
               {
                  this.walkAction(_loc2_);
               }
               this._people.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onPeopleWalkEnter);
            }
         }
      }
      
      public function get petMc() : MovieClip
      {
         return this._petMc;
      }
   }
}
