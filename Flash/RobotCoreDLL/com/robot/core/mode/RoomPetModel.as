package com.robot.core.mode
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MovesLangXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MathUtil;
   import org.taomee.utils.MovieClipUtil;
   
   public class RoomPetModel extends ActionSpriteModel
   {
       
      
      private var _info:PetListInfo;
      
      private var _petId:uint;
      
      private var _obj:MovieClip;
      
      private var _inTime:uint;
      
      private var _dialogTime:uint;
      
      private var nameTxt:TextField;
      
      private var tf:TextFormat;
      
      private var _brightMc:MovieClip;
      
      private var _abilityLight:MovieClip;
      
      public function RoomPetModel(param1:PetListInfo)
      {
         super();
         buttonMode = true;
         mouseChildren = false;
         _speed = 2;
         this._info = param1;
         this._petId = this._info.id;
         this.tf = new TextFormat();
         this.tf.size = 12;
         this.tf.color = 16776960;
         this.nameTxt = new TextField();
         this.nameTxt.selectable = false;
         this.nameTxt.mouseEnabled = false;
         this.nameTxt.autoSize = TextFieldAutoSize.LEFT;
         this.nameTxt.defaultTextFormat = this.tf;
         this.nameTxt.filters = [new GlowFilter(0,1,1.5,1.5,10)];
      }
      
      override public function get width() : Number
      {
         if(this._obj)
         {
            return this._obj.width;
         }
         return super.width;
      }
      
      override public function get height() : Number
      {
         if(this._obj)
         {
            return this._obj.height;
         }
         return super.height;
      }
      
      public function get info() : PetListInfo
      {
         return this._info;
      }
      
      override public function set direction(param1:String) : void
      {
         if(param1 == null || param1 == "")
         {
            return;
         }
         if(this._obj)
         {
            this._obj.gotoAndStop(param1);
         }
      }
      
      override public function get centerPoint() : Point
      {
         _centerPoint.x = x;
         _centerPoint.y = y - 10;
         return _centerPoint;
      }
      
      override public function get hitRect() : Rectangle
      {
         _hitRect.x = x - this.width / 2;
         _hitRect.y = y - this.height;
         _hitRect.width = this.width;
         _hitRect.height = this.height;
         return _hitRect;
      }
      
      public function show(param1:Point) : void
      {
         if(this._obj)
         {
            return;
         }
         pos = param1;
         if(MainManager.actorInfo.mapID == MainManager.actorID)
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(this._petId,this._info.catchTime),this.onLoad,"pet");
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(this._petId),this.onLoad,"pet");
         }
      }
      
      override public function destroy() : void
      {
         clearInterval(this._dialogTime);
         super.destroy();
         removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
         removeEventListener(RobotEvent.WALK_END,this.onWalkOver);
         if(MainManager.actorInfo.mapID == MainManager.actorID)
         {
            ResourceManager.cancel(ClientConfig.getPetSwfPath(this._petId,this._info.catchTime),this.onLoad);
         }
         else
         {
            ResourceManager.cancel(ClientConfig.getPetSwfPath(this._petId),this.onLoad);
         }
         DisplayUtil.removeForParent(this);
         this._obj = null;
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         if(this._info.isBright)
         {
            this.bright();
         }
         else
         {
            this.removeBright();
         }
         this.showAbilityLight();
         this._obj = param1 as MovieClip;
         this._obj.gotoAndStop(_direction);
         addChild(this._obj);
         MapManager.currentMap.depthLevel.addChild(this);
         starAutoWalk(2000);
         MovieClipUtil.childStop(this._obj,1);
         addEventListener(RobotEvent.WALK_START,this.onWalkStart);
         addEventListener(RobotEvent.WALK_END,this.onWalkOver);
         if(NonoManager.info)
         {
            if(NonoManager.info.func[9])
            {
               clearInterval(this._dialogTime);
               this._dialogTime = setInterval(this.onAutoDialog,MathUtil.randomHalfAdd(20000));
            }
         }
         this.nameTxt.text = PetXMLInfo.getName(this._info.id);
         this.nameTxt.x = -this.nameTxt.width / 2;
         this.nameTxt.y = 4;
         addChild(this.nameTxt);
      }
      
      public function bright() : void
      {
         if(this._brightMc)
         {
            DisplayUtil.removeForParent(this._brightMc);
            this._brightMc = null;
         }
         this._brightMc = UIManager.getMovieClip("PetBright_MC");
         addChildAt(this._brightMc,0);
      }
      
      public function removeBright() : void
      {
         if(this._brightMc)
         {
            DisplayUtil.removeForParent(this._brightMc);
         }
      }
      
      public function showAbilityLight() : void
      {
         if(this._abilityLight)
         {
            DisplayUtil.removeForParent(this._abilityLight);
            this._abilityLight = null;
         }
         switch(this.info.abilityType)
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
         if(this._abilityLight)
         {
            addChild(this._abilityLight);
         }
      }
      
      private function onAutoDialog() : void
      {
         var _loc1_:String = MovesLangXMLInfo.getRandomLang(this._info.id);
         if(_loc1_ != "")
         {
            showBox(_loc1_);
         }
      }
      
      private function onWalkStart(param1:Event) : void
      {
         var _loc2_:MovieClip = null;
         if(this._obj)
         {
            _loc2_ = this._obj.getChildAt(0) as MovieClip;
            if(_loc2_)
            {
               if(_loc2_.currentFrame == 1)
               {
                  _loc2_.gotoAndPlay(2);
               }
            }
         }
      }
      
      private function onWalkOver(param1:Event) : void
      {
         if(this._obj)
         {
            MovieClipUtil.childStop(this._obj,1);
         }
      }
   }
}
